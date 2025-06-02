"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodaysPatientCountsByDepartment = exports.getPatientWithRecords = exports.createPatient = exports.getPatients = void 0;
const orm_1 = require("../../prisma/orm");
//  import axios from "axios";
const prisma = new orm_1.PrismaClient();
exports.default = prisma;
//console.log("ps.ts at line 12:");
// Fetch patients with an optional department filter
const getPatients = async (DepartmentName) => {
    try {
        const whereCondition = DepartmentName ? { DepartmentName } : {}; // Filter by department if provided
        console.log("ps.ts at line 12: in ps services.ts", whereCondition);
        const patients = await prisma.patients.findMany({});
        return patients;
    }
    catch (error) {
        console.error("Error fetching patients:", error);
        throw new Error("Failed to fetch patients");
    }
};
exports.getPatients = getPatients;
// export const createPatient = async (patientData: {
//   PatientID: string;
//   Name: string;
//   Age: string;
//   Gender: string;
//   ContactNumber?: string;
//   Address?: string;
//   DepartmentName?: string;
//   Status?: string;
// }) => {
//   try {
//     const newPatient = await prisma.patients.create({
//       data: {
//         PatientID: patientData.PatientID,
//         Name: patientData.Name,
//         Age: patientData.Age,
//         Gender: patientData.Gender,
//         ContactNumber: patientData.ContactNumber,
//         Address: patientData.Address,
//         DepartmentName: patientData.DepartmentName ?? undefined,
//         Status: patientData.Status ?? undefined,
//         // CreatedAt and UpdatedAt are auto-filled by DB defaults
//       },
//     });
//     console.log("✅ New patient created:", newPatient);
//     return newPatient;
//   } catch (error) {
//     console.error("❌ Error creating patient:", error);
//     throw new Error("Failed to create patient");
//   }
// };
const createPatient = async (patientData) => {
    try {
        const newPatient = await prisma.patients.create({
            data: {
                PatientID: patientData.PatientID,
                Name: patientData.Name,
                Age: patientData.Age,
                Gender: patientData.Gender,
                ContactNumber: patientData.ContactNumber,
                Address: patientData.Address,
                DepartmentID: patientData.DepartmentID, // Default to "General Medicine"
                Status: patientData.Status ?? "True", // Default to "True"
                PatientRegistrationDate: patientData.PatientRegistrationDate,
                Ptype: patientData.Ptype,
                Sponsor: patientData.Sponsor,
                Email: patientData.Email,
                AlternateNumber: patientData.AlternateNumber,
                DOB: patientData.DOB,
                BloodGroup: patientData.BloodGroup,
                // CreatedAt and UpdatedAt are auto-filled by DB defaults
            },
        });
        console.log("✅ New patient created:", newPatient);
        return newPatient;
    }
    catch (error) {
        console.error("❌ Error creating patient:", error);
        throw new Error("Failed to create patient");
    }
};
exports.createPatient = createPatient;
// Fetch medical records based on a given field (e.g., PatientID, Diagnosis, etc.)
const getPatientWithRecords = async (id) => {
    console.log("ps.ts at line 23:", id);
    const patient = await prisma.patients.findUnique({
        where: { PatientID: id },
    });
    if (!patient) {
        throw new Error("Patient not found");
    }
    const medicalRecords = await prisma.medicalRecords.findMany({
        where: { PatientID: id },
    });
    console.log("ps.ts at line 36:", patient, medicalRecords);
    return { patient, medicalRecords };
};
exports.getPatientWithRecords = getPatientWithRecords;
const getTodaysPatientCountsByDepartment = async () => {
    try {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        const result = await prisma.patients.groupBy({
            by: ['DepartmentID'],
            where: {
                PatientRegistrationDate: {
                    gte: todayStart,
                    lte: todayEnd
                },
                Ptype: 'OP',
            },
            _count: {
                PatientID: true
            }
        });
        // Convert result to { DepartmentID: count } while skipping nulls
        const departmentCounts = result.reduce((acc, { DepartmentID, _count }) => {
            if (DepartmentID !== null) {
                acc[DepartmentID] = _count.PatientID;
            }
            return acc;
        }, {});
        return departmentCounts;
    }
    catch (error) {
        console.error("Error fetching patient counts by department:", error);
        throw new Error("Failed to fetch patient counts by department");
    }
};
exports.getTodaysPatientCountsByDepartment = getTodaysPatientCountsByDepartment;
