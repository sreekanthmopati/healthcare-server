import express from "express";
import {
  getDepartments,
  getDiagnoses,
  getDiagnosesForDepartment
} from "../controllers/DepartmentsController";

const router = express.Router();

router.get("/departments", getDepartments);
router.get("/diagnoses", getDiagnoses);
router.get("/diagnoses/:departmentId", getDiagnosesForDepartment);

export default router;
