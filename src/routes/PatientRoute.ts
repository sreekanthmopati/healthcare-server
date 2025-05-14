import express from "express";
import { getAllPatients, getPatientRecords, createPatientApi } from "../controllers/PatientsController";

const router = express.Router();

router.get("/", getAllPatients);
router.get("/:id", getPatientRecords);
router.post("/create", createPatientApi);
export default router;
