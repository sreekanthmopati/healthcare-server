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
exports.createPatientApi = exports.getPatientRecords = exports.getAllPatients = void 0;
const PatientsService_1 = require("../services/PatientsService"); // ✅ Correct import
const getAllPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const department = req.query.departmentName; // Get department from query parameters
        console.log("pc.ts at line 7 in controller pc.ts:", department);
        const patients = yield (0, PatientsService_1.getPatients)(department); // ✅ Correct function call
        res.json(patients);
    }
    catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ message: "Failed to fetch patients" });
    }
});
exports.getAllPatients = getAllPatients;
const getPatientRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log("pc.ts at line 20 to get medical record:", id);
        const data = yield (0, PatientsService_1.getPatientWithRecords)(id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch patient records" });
    }
});
exports.getPatientRecords = getPatientRecords;
const createPatientApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientData = req.body;
        console.log("Creating new patient with data:", patientData);
        const newPatient = yield (0, PatientsService_1.createPatient)(patientData);
        res.status(201).json(newPatient);
    }
    catch (error) {
        console.error("Error creating patient:", error);
        res.status(500).json({ message: "Failed to create patient" });
    }
});
exports.createPatientApi = createPatientApi;
// Controller for creating a new patient
// export const createPatientApi = async (req: Request, res: Response) => {
//   try {
//     const patientData = req.body;
//     console.log("Creating new patient with data:", patientData);
//     // Validate required fields
//     if (!patientData.PatientRegistrationDate) {
//       return res.status(400).json({ message: "Patient Registration Date is required" });
//     }
//     if (!patientData.Ptype) {
//       return res.status(400).json({ message: "Patient Type (Inpatient/Outpatient) is required" });
//     }
//     // Validate other required fields depending on the business logic
//     if (!patientData.PatientID || !patientData.Name || !patientData.Age || !patientData.Gender) {
//       return res.status(400).json({ message: "PatientID, Name, Age, and Gender are required" });
//     }
//     // Call the service to create the patient
//     const newPatient = await createPatient(patientData);
//     res.status(201).json(newPatient);
//   } catch (error) {
//     console.error("Error creating patient:", error);
//     res.status(500).json({ message: "Failed to create patient" });
//   }
// };
// export const createPatientApi = async (req: Request, res: Response) => {
//   try {
//     const patientData = req.body;
//     console.log("Creating new patient with data:", patientData);
//     const newPatient = await createPatient(patientData);
//     res.status(201).json(newPatient);
//   } catch (error) {
//     console.error("Error creating patient:", error);
//     res.status(500).json({ message: "Failed to create patient" });
//   }
// };
