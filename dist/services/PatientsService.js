"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatientWithRecords = exports.createPatient = exports.getPatients = void 0;
const orm_1 = require("../../prisma/orm");
//  import axios from "axios";
const prisma = new orm_1.PrismaClient();
exports.default = prisma;
//console.log("ps.ts at line 12:");
// Fetch patients with an optional department filter
const getPatients = (DepartmentName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const whereCondition = DepartmentName ? { DepartmentName } : {}; // Filter by department if provided
        console.log("ps.ts at line 12: in ps services.ts", whereCondition);
        const patients = yield prisma.patients.findMany({ where: whereCondition });
        return patients;
    }
    catch (error) {
        console.error("Error fetching patients:", error);
        throw new Error("Failed to fetch patients");
    }
});
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
const createPatient = (patientData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const newPatient = yield prisma.patients.create({
            data: {
                PatientID: patientData.PatientID,
                Name: patientData.Name,
                Age: patientData.Age,
                Gender: patientData.Gender,
                ContactNumber: patientData.ContactNumber,
                Address: patientData.Address,
                DepartmentName: (_a = patientData.DepartmentName) !== null && _a !== void 0 ? _a : "General Medicine", // Default to "General Medicine"
                Status: (_b = patientData.Status) !== null && _b !== void 0 ? _b : "True", // Default to "True"
                PatientRegistrationDate: patientData.PatientRegistrationDate,
                Ptype: patientData.Ptype,
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
});
exports.createPatient = createPatient;
// Fetch medical records based on a given field (e.g., PatientID, Diagnosis, etc.)
const getPatientWithRecords = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ps.ts at line 23:", id);
    const patient = yield prisma.patients.findUnique({
        where: { PatientID: id },
    });
    if (!patient) {
        throw new Error("Patient not found");
    }
    const medicalRecords = yield prisma.medicalRecords.findMany({
        where: { PatientID: id },
    });
    console.log("ps.ts at line 36:", patient, medicalRecords);
    return { patient, medicalRecords };
});
exports.getPatientWithRecords = getPatientWithRecords;
// Create a new patient
