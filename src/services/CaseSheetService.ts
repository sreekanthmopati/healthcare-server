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

// Fetch all case sheets with detailed information
export const getAllCaseSheetsWithDetails = async () => {
  return await prisma.caseSheets.findMany({
    include: {
      MedicalRecord: {
        include: {
          Patients: true,
          Admissions: {
            include: {
              diagnosis: true, // Correct field name from schema
              bed: true,        // Include bed details if needed
              patient: true,    // Include patient details if needed
            }
          }
        }
      }
    }
  });
};

