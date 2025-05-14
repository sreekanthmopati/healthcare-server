"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiagnosesForDepartment = exports.getDiagnoses = exports.getDepartments = void 0;
const DepartmentsService_1 = require("../services/DepartmentsService");
// 1. Get all departments
const getDepartments = async (req, res) => {
    try {
        const departments = await (0, DepartmentsService_1.getAllDepartments)();
        res.json(departments);
    }
    catch (error) {
        console.error("Error fetching departments:", error);
        res.status(500).json({ message: "Failed to fetch departments" });
    }
};
exports.getDepartments = getDepartments;
// 2. Get all diagnoses
const getDiagnoses = async (req, res) => {
    try {
        const diagnoses = await (0, DepartmentsService_1.getAllDiagnoses)();
        res.json(diagnoses);
    }
    catch (error) {
        console.error("Error fetching diagnoses:", error);
        res.status(500).json({ message: "Failed to fetch diagnoses" });
    }
};
exports.getDiagnoses = getDiagnoses;
// 3. Get diagnoses by department ID
const getDiagnosesForDepartment = async (req, res) => {
    try {
        const departmentId = parseInt(req.params.departmentId);
        const diagnoses = await (0, DepartmentsService_1.getDiagnosesByDepartment)(departmentId);
        res.json(diagnoses);
    }
    catch (error) {
        console.error("Error fetching diagnoses by department:", error);
        res.status(500).json({ message: "Failed to fetch diagnoses for department" });
    }
};
exports.getDiagnosesForDepartment = getDiagnosesForDepartment;
