"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkDischargeAdmissions = exports.dischargeAdmission = exports.createBulkAdmissions = exports.getEligiblePatients = exports.generateBulkAdmissionNos = exports.getAllAdmissionsWithDetails = exports.deleteAdmission = exports.updateAdmission = exports.createAdmission = exports.getAdmissionById = exports.getAllAdmissions = void 0;
const orm_1 = require("../../prisma/orm");
const WardService_1 = require("./WardService");
const prisma = new orm_1.PrismaClient();
// 1. Get all admissions
const getAllAdmissions = async () => {
    return await prisma.admissions.findMany({
        include: {
            patient: true,
            bed: {
                include: {
                    room: {
                        include: {
                            ward: true
                        }
                    }
                }
            }
        }
    });
};
exports.getAllAdmissions = getAllAdmissions;
// 2. Get admission by ID
const getAdmissionById = async (admissionId) => {
    return await prisma.admissions.findUnique({
        where: { admission_id: admissionId },
        include: {
            patient: true,
            bed: {
                include: {
                    room: {
                        include: {
                            ward: true
                        }
                    }
                }
            }
        }
    });
};
exports.getAdmissionById = getAdmissionById;
const generateAdmissionNo = async () => {
    const lastAdmission = await prisma.admissions.findFirst({
        orderBy: { admission_no: "desc" },
        select: { admission_no: true },
    });
    const lastNo = lastAdmission?.admission_no || 99999;
    const nextNo = lastNo + 1;
    if (nextNo > 999999) {
        throw new Error("Admission number limit reached.");
    }
    return nextNo;
};
// Create a new admission with auto-generated admission_no
const createAdmission = async (data) => {
    const admission_no = await generateAdmissionNo();
    return await prisma.admissions.create({
        data: {
            ...data,
            admission_no,
        },
    });
};
exports.createAdmission = createAdmission;
// 4. Update an admission
const updateAdmission = async (admissionId, updates) => {
    return await prisma.admissions.update({
        where: { admission_id: admissionId },
        data: updates
    });
};
exports.updateAdmission = updateAdmission;
// 5. Delete an admission
const deleteAdmission = async (admissionId) => {
    return await prisma.admissions.delete({
        where: { admission_id: admissionId }
    });
};
exports.deleteAdmission = deleteAdmission;
//getAllAdmissionsWithDetails
const getAllAdmissionsWithDetails = async () => {
    const admissions = await prisma.admissions.findMany({
        include: {
            patient: true,
            bed: {
                include: {
                    room: {
                        include: {
                            ward: true
                        }
                    }
                }
            },
            diagnosis: {
                include: {
                    Departments: true // 👈 Include related department
                }
            }
        }
    });
    return admissions;
};
exports.getAllAdmissionsWithDetails = getAllAdmissionsWithDetails;
// Bulk generate unique admission numbers for bulk admissions
const generateBulkAdmissionNos = async (count) => {
    const lastAdmission = await prisma.admissions.findFirst({
        orderBy: { admission_no: "desc" },
        select: { admission_no: true },
    });
    let lastNo = lastAdmission?.admission_no || 99999;
    if (lastNo + count > 999999) {
        throw new Error("Admission number limit reached.");
    }
    const admissionNos = [];
    for (let i = 1; i <= count; i++) {
        admissionNos.push(lastNo + i);
    }
    return admissionNos;
};
exports.generateBulkAdmissionNos = generateBulkAdmissionNos;
// Get eligible patients for admission (registered today, not currently admitted)
const getEligiblePatients = async (departmentId, limit) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return await prisma.patients.findMany({
        where: {
            DepartmentID: departmentId,
            PatientRegistrationDate: { gte: today },
            NOT: {
                Admissions: {
                    some: {
                        discharge_date: null,
                    },
                },
            },
        },
        take: limit,
        orderBy: { PatientRegistrationDate: "asc" },
    });
};
exports.getEligiblePatients = getEligiblePatients;
// Assign beds for admission
const assignBeds = async (wardId, count) => {
    return await prisma.bed.findMany({
        where: {
            room: { ward_id: wardId },
            occupied_status: "Vacant",
        },
        take: count,
    });
};
// Process single department admission with batch operations
const processDepartmentAdmission = async (departmentId, wardId, diagnosisId, count, admissionDate, remarks, tx) => {
    // 1. Get available bed count
    const availableBeds = await (0, WardService_1.getAvailableBedCount)(wardId);
    const actualCount = Math.min(count, availableBeds);
    if (actualCount === 0) {
        return {
            departmentId,
            success: 0,
            failed: count,
            message: `No available beds in ward ${wardId}`,
        };
    }
    // 2. Get eligible patients
    const patients = await (0, exports.getEligiblePatients)(departmentId, actualCount);
    if (patients.length === 0) {
        return {
            departmentId,
            success: 0,
            failed: count,
            message: `No eligible patients in department ${departmentId}`,
        };
    }
    // 3. Assign beds
    const beds = await assignBeds(wardId, actualCount);
    // 4. Generate admission numbers upfront
    // 4. Generate admission numbers upfront
    const batchCount = Math.min(actualCount, patients.length);
    const admissionNos = await (0, exports.generateBulkAdmissionNos)(batchCount);
    // 5. Prepare bulk admissions data
    const admissionsData = [];
    for (let i = 0; i < Math.min(actualCount, patients.length); i++) {
        admissionsData.push({
            admission_no: admissionNos[i],
            PatientID: patients[i].PatientID,
            bed_id: beds[i].bed_id,
            diagnosis_id: diagnosisId,
            admission_date: admissionDate,
            remarks: remarks,
        });
    }
    // 6. Batch create admissions
    const createdAdmissions = await tx.admissions.createMany({
        data: admissionsData,
    });
    // 7. Batch update beds status in parallel
    await Promise.all(beds.map((bed) => tx.bed.update({
        where: { bed_id: bed.bed_id },
        data: { occupied_status: "Occupied" },
    })));
    // 8. Update patient ptype to 'IP'
    await tx.patients.updateMany({
        where: {
            PatientID: {
                in: patients.slice(0, batchCount).map((p) => p.PatientID),
            },
        },
        data: {
            Ptype: 'IP',
        },
    });
    return {
        departmentId,
        success: createdAdmissions.count,
        failed: count - createdAdmissions.count,
        message: createdAdmissions.count === count
            ? "All admissions processed successfully"
            : `Only ${createdAdmissions.count} admissions processed (${count - createdAdmissions.count} failed)`,
    };
};
// Bulk admission service with smaller transactions per admission group
const createBulkAdmissions = async (admissionsData) => {
    const results = [];
    // Each group is processed in its own transaction
    for (const data of admissionsData) {
        const result = await prisma.$transaction(async (tx) => {
            return await processDepartmentAdmission(data.departmentId, data.wardId, data.diagnosisId, data.count, data.admissionDate, data.remarks, tx);
        });
        results.push(result);
    }
    return results;
};
exports.createBulkAdmissions = createBulkAdmissions;
// Utility to generate random discharge reason
const getRandomDischargeReasonId = async () => {
    const reasons = await prisma.dischargeReason.findMany({ select: { id: true } });
    const randomIndex = Math.floor(Math.random() * reasons.length);
    return reasons[randomIndex]?.id || null;
};
// ✅ Single discharge
const dischargeAdmission = async (admissionId, dischargeReasonId) => {
    const admission = await prisma.admissions.update({
        where: { admission_id: admissionId },
        data: {
            discharge_date: new Date(),
            dischargeReason: { connect: { id: dischargeReasonId } },
        },
    });
    await prisma.bed.update({
        where: { bed_id: admission.bed_id },
        data: { occupied_status: "Vacant" },
    });
    return admission;
};
exports.dischargeAdmission = dischargeAdmission;
// ✅ Bulk discharge with random reasons
const bulkDischargeAdmissions = async (admissionIds) => {
    const discharges = [];
    for (const id of admissionIds) {
        const reasonId = await getRandomDischargeReasonId();
        const admission = await prisma.admissions.update({
            where: { admission_id: id },
            data: {
                discharge_date: new Date(),
                dischargeReason: reasonId ? { connect: { id: reasonId } } : undefined,
            },
        });
        await prisma.bed.update({
            where: { bed_id: admission.bed_id },
            data: { occupied_status: "Vacant" },
        });
        discharges.push(admission);
    }
    return discharges;
};
exports.bulkDischargeAdmissions = bulkDischargeAdmissions;
