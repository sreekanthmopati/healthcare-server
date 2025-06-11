// import { PrismaClient } from "../../prisma/orm";
// //import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export class CaseSheetService {
//   static async getCaseSheet(patientId: string) {
//     return await prisma.caseSheets.findUnique({
//       where: { PatientID: patientId }, // 🔹 FIXED!
//     });
//   }

//   static async createCaseSheet(patientId: string, caseSheetData: any) {
//     return await prisma.caseSheets.create({
//       data: { PatientID: patientId, ...caseSheetData }, // 🔹 FIXED!
//     });
//   }

//   static async updateCaseSheet(patientId: string, caseSheetData: any) {
//     return await prisma.caseSheets.update({
//       where: { PatientID: patientId }, // 🔹 FIXED!
//       data: caseSheetData,
//     });
//   }

//   static async deleteCaseSheet(patientId: string) {
//     return await prisma.caseSheets.delete({
//       where: { PatientID: patientId }, // 🔹 FIXED!
//     });
//   }
// }





import { PrismaClient } from "../../prisma/orm";

const prisma = new PrismaClient();

export const getAllMedicalRecordsWithDetails = async () => {
  return await prisma.medicalRecords.findMany({
    include: {
      Patients: true,
      Admissions: {
        include: {
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
              Departments: true
            }
          },
          dischargeReason: true
        }
      }
    },
    orderBy: {
      RecordDate: 'desc'
    }
  });
};

