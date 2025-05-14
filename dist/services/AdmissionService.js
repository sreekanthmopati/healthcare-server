"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableBedsByRoom = exports.createBulkAdmissions = exports.checkBulkBedAvailability = exports.getAllAdmissionsWithDetails = exports.deleteAdmission = exports.updateAdmission = exports.createAdmission = exports.getAdmissionById = exports.getAllAdmissions = void 0;
const orm_1 = require("../../prisma/orm");
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
// 3. Create a new admission
// Utility to generate admission number (e.g., ADM0001)
// const generateAdmissionNo = async (): Promise<string> => {
//     const count = await prisma.admissions.count();
//     return `ADM${(count + 1).toString().padStart(4, "0")}`;
//   };
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
            diagnosis: true
        }
    });
    return admissions;
};
exports.getAllAdmissionsWithDetails = getAllAdmissionsWithDetails;
// Generate admission numbers for bulk admissions
const generateBulkAdmissionNos = async (count) => {
    const lastAdmission = await prisma.admissions.findFirst({
        orderBy: { admission_no: "desc" },
        select: { admission_no: true },
    });
    const lastNo = lastAdmission?.admission_no || 99999;
    const admissionNos = Array.from({ length: count }, (_, i) => lastNo + i + 1);
    if (admissionNos[admissionNos.length - 1] > 999999) {
        throw new Error("Admission number limit reached.");
    }
    return admissionNos;
};
// Check bed availability for multiple beds
const checkBulkBedAvailability = async (bedIds) => {
    const beds = await prisma.bed.findMany({
        where: {
            bed_id: { in: bedIds },
            occupied_status: "Vacant"
        }
    });
    return {
        availableBeds: beds.map(b => b.bed_id),
        unavailableBeds: bedIds.filter(id => !beds.some(b => b.bed_id === id))
    };
};
exports.checkBulkBedAvailability = checkBulkBedAvailability;
// Create bulk admissions
const createBulkAdmissions = async (admissionsData) => {
    const admissionNos = await generateBulkAdmissionNos(admissionsData.length);
    return await prisma.$transaction(async (prisma) => {
        // 1. Create all admissions
        const admissions = await Promise.all(admissionsData.map((data, index) => prisma.admissions.create({
            data: {
                ...data,
                admission_no: admissionNos[index],
            },
        })));
        // 2. Update all beds to occupied status
        await prisma.bed.updateMany({
            where: {
                bed_id: { in: admissionsData.map(data => data.bed_id) }
            },
            data: { occupied_status: "Occupied" }
        });
        return admissions;
    });
};
exports.createBulkAdmissions = createBulkAdmissions;
// Get available beds by room
const getAvailableBedsByRoom = async (roomId) => {
    return await prisma.bed.findMany({
        where: {
            room_id: roomId,
            occupied_status: "Vacant"
        },
        include: {
            room: {
                include: {
                    ward: true
                }
            }
        }
    });
};
exports.getAvailableBedsByRoom = getAvailableBedsByRoom;
