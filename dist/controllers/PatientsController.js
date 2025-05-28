"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodaysPatientCountsByDepartmentController = exports.createPatientApi = exports.getPatientRecords = exports.getAllPatients = void 0;
const PatientsService_1 = require("../services/PatientsService"); // ✅ Correct import
const getAllPatients = async (req, res) => {
    try {
        const department = req.query.departmentName; // Get department from query parameters
        console.log("pc.ts at line 7 in controller pc.ts:", department);
        const patients = await (0, PatientsService_1.getPatients)(department); // ✅ Correct function call
        res.json(patients);
    }
    catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ message: "Failed to fetch patients" });
    }
};
exports.getAllPatients = getAllPatients;
const getPatientRecords = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("pc.ts at line 20 to get medical record:", id);
        const data = await (0, PatientsService_1.getPatientWithRecords)(id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch patient records" });
    }
};
exports.getPatientRecords = getPatientRecords;
const createPatientApi = async (req, res) => {
    try {
        const patientData = req.body;
        console.log("Creating new patient with data:", patientData);
        const newPatient = await (0, PatientsService_1.createPatient)(patientData);
        res.status(201).json(newPatient);
    }
    catch (error) {
        console.error("Error creating patient:", error);
        res.status(500).json({ message: "Failed to create patient" });
    }
};
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
const getTodaysPatientCountsByDepartmentController = async (req, res) => {
    try {
        const counts = await (0, PatientsService_1.getTodaysPatientCountsByDepartment)();
        res.status(200).json(counts); // Just send the counts directly
    }
    catch (error) {
        console.error("Error fetching patient counts:", error);
        res.status(500).json({ error: "Failed to fetch today's patient counts by department" });
    }
};
exports.getTodaysPatientCountsByDepartmentController = getTodaysPatientCountsByDepartmentController;
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
