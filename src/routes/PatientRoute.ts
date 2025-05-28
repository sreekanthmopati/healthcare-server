import express from "express";
import { getAllPatients, getPatientRecords, createPatientApi, getTodaysPatientCountsByDepartmentController } from "../controllers/PatientsController";

const router = express.Router();
router.get("/todays-patient-counts", getTodaysPatientCountsByDepartmentController);
router.get("/", getAllPatients);
router.get("/:id", getPatientRecords);
router.post("/create", createPatientApi);

export default router;
