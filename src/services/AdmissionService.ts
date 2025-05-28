import { PrismaClient } from "../../prisma/orm";
import { getAvailableBedCount } from "./WardService";

const prisma = new PrismaClient();

// 1. Get all admissions
export const getAllAdmissions = async () => {
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

// 2. Get admission by ID
export const getAdmissionById = async (admissionId: number) => {
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


const generateAdmissionNo = async (): Promise<number> => {
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
  export const createAdmission = async (data: {
    PatientID: string;
    bed_id: number;
    category: string;
    admission_date: Date;
    diagnosis_id: number;
    discharge_date?: Date;
    discharge_reason?: string;
    treatment_plan?: string;
    remarks?: string;
  }) => {
    const admission_no = await generateAdmissionNo();
  
    return await prisma.admissions.create({
      data: {
        ...data,
        admission_no,
      },
    });
  };
  

// 4. Update an admission
export const updateAdmission = async (
  admissionId: number,
  updates: {
    discharge_date?: Date;
    discharge_reason?: string;
    treatment_plan?: string;
    remarks?: string;
  }
) => {
  return await prisma.admissions.update({
    where: { admission_id: admissionId },
    data: updates
  });
};

// 5. Delete an admission
export const deleteAdmission = async (admissionId: number) => {
  return await prisma.admissions.delete({
    where: { admission_id: admissionId }
  });
};



//getAllAdmissionsWithDetails
export const getAllAdmissionsWithDetails = async () => {
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


















// Bulk generate unique admission numbers for bulk admissions
export const generateBulkAdmissionNos = async (count: number): Promise<number[]> => {
  const lastAdmission = await prisma.admissions.findFirst({
    orderBy: { admission_no: "desc" },
    select: { admission_no: true },
  });

  let lastNo = lastAdmission?.admission_no || 99999;

  if (lastNo + count > 999999) {
    throw new Error("Admission number limit reached.");
  }

  const admissionNos: number[] = [];
  for (let i = 1; i <= count; i++) {
    admissionNos.push(lastNo + i);
  }

  return admissionNos;
};

// Get eligible patients for admission (registered today, not currently admitted)
export const getEligiblePatients = async (departmentId: number, limit: number) => {
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

// Assign beds for admission
const assignBeds = async (wardId: number, count: number) => {
  return await prisma.bed.findMany({
    where: {
      room: { ward_id: wardId },
      occupied_status: "Vacant",
    },
    take: count,
  });
};

// Process single department admission with batch operations
const processDepartmentAdmission = async (
  departmentId: number,
  wardId: number,
  diagnosisId: number,
  count: number,
  admissionDate: Date,
  remarks: string,
  tx: any
) => {
  // 1. Get available bed count
  const availableBeds = await getAvailableBedCount(wardId);
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
  const patients = await getEligiblePatients(departmentId, actualCount);
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
const admissionNos = await generateBulkAdmissionNos(batchCount);

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
  await Promise.all(
    beds.map((bed) =>
      tx.bed.update({
        where: { bed_id: bed.bed_id },
        data: { occupied_status: "Occupied" },
      })
    )
  );

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
    message:
      createdAdmissions.count === count
        ? "All admissions processed successfully"
        : `Only ${createdAdmissions.count} admissions processed (${count - createdAdmissions.count} failed)`,
  };
};

// Bulk admission service with smaller transactions per admission group
export const createBulkAdmissions = async (
  admissionsData: {
    departmentId: number;
    wardId: number;
    diagnosisId: number;
    count: number;
    admissionDate: Date;
    remarks: string;
  }[]
) => {
  const results = [];

  // Each group is processed in its own transaction
  for (const data of admissionsData) {
    const result = await prisma.$transaction(async (tx) => {
      return await processDepartmentAdmission(
        data.departmentId,
        data.wardId,
        data.diagnosisId,
        data.count,
        data.admissionDate,
        data.remarks,
        tx
      );
    });
    results.push(result);
  }

  return results;
};
















export const bulkDischargeAdmissions = async (admissionIds: number[]) => {
  // Get the max discharge reason ID to use for randomization
  const reasons = await prisma.dischargeReason.findMany({
    select: { id: true }
  });

  if (!reasons.length) {
    throw new Error("No discharge reasons available");
  }

  const reasonIds = reasons.map(r => r.id);

  const updates = admissionIds.map(async (id) => {
    const randomReasonId = reasonIds[Math.floor(Math.random() * reasonIds.length)];

    return await prisma.admissions.update({
      where: { admission_id: id },
      data: {
        discharge_date: new Date(),
        dischargeReasonId: randomReasonId,
      }
    });
  });

  return await Promise.all(updates);
};






export const dischargeAdmission = async (admissionId: number, dischargeReasonId: number) => {
  return await prisma.admissions.update({
    where: { admission_id: admissionId },
    data: {
      discharge_date: new Date(),               // Set discharge date to now
      dischargeReasonId: dischargeReasonId,     // Set selected discharge reason
    },
    include: {
      patient: true,
      bed: true,
      diagnosis: true,
      dischargeReason: true,
    }
  });
};













