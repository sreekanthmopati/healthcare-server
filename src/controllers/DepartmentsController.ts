import { Request, Response } from "express";
import { getAllDepartments, getAllDiagnoses, getDiagnosesByDepartment } from "../services/DepartmentsService";



// 1. Get all departments
export const getDepartments = async (req: Request, res: Response) => {
    try {
      const departments = await getAllDepartments();
      res.json(departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ message: "Failed to fetch departments" });
    }
  };
  
  // 2. Get all diagnoses
  export const getDiagnoses = async (req: Request, res: Response) => {
    try {
      const diagnoses = await getAllDiagnoses();
      res.json(diagnoses);
    } catch (error) {
      console.error("Error fetching diagnoses:", error);
      res.status(500).json({ message: "Failed to fetch diagnoses" });
    }
  };
  
  // 3. Get diagnoses by department ID
  export const getDiagnosesForDepartment = async (req: Request, res: Response) => {
    try {
      const departmentId = parseInt(req.params.departmentId);
      const diagnoses = await getDiagnosesByDepartment(departmentId);
      res.json(diagnoses);
    } catch (error) {
      console.error("Error fetching diagnoses by department:", error);
      res.status(500).json({ message: "Failed to fetch diagnoses for department" });
    }
  };