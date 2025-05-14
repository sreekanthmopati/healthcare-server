import { PrismaClient } from "../../prisma/orm";

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

// 3. Create a new admission
// Utility to generate admission number (e.g., ADM0001)
// const generateAdmissionNo = async (): Promise<string> => {
//     const count = await prisma.admissions.count();
//     return `ADM${(count + 1).toString().padStart(4, "0")}`;
//   };


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
      diagnosis: true
    }
  });
  return admissions;
  
};














// Generate admission numbers for bulk admissions
const generateBulkAdmissionNos = async (count: number): Promise<number[]> => {
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
export const checkBulkBedAvailability = async (bedIds: number[]) => {
  const beds = await prisma.bed.findMany({
    where: {
      bed_id: { in: bedIds },
      occupied_status: "Vacant"
    }
  });

  return {
    availableBeds: beds.map(b => b.bed_id),
    unavailableBeds: bedIds.filter(id => 
      !beds.some(b => b.bed_id === id)
    )
  };
};

// Create bulk admissions
export const createBulkAdmissions = async (admissionsData: {
  PatientID: string;
  bed_id: number;
  admission_date: Date;
  diagnosis_id: number;
  treatment_plan?: string;
  remarks?: string;
}[]) => {
  const admissionNos = await generateBulkAdmissionNos(admissionsData.length);

  return await prisma.$transaction(async (prisma) => {
    // 1. Create all admissions
    const admissions = await Promise.all(
      admissionsData.map((data, index) => 
        prisma.admissions.create({
          data: {
            ...data,
            admission_no: admissionNos[index],
          },
        })
      )
    );

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

// Get available beds by room
export const getAvailableBedsByRoom = async (roomId: number) => {
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