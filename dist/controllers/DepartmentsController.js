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
exports.getDiagnosesForDepartment = exports.getDiagnoses = exports.getDepartments = void 0;
const DepartmentsService_1 = require("../services/DepartmentsService");
// 1. Get all departments
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield (0, DepartmentsService_1.getAllDepartments)();
        res.json(departments);
    }
    catch (error) {
        console.error("Error fetching departments:", error);
        res.status(500).json({ message: "Failed to fetch departments" });
    }
});
exports.getDepartments = getDepartments;
// 2. Get all diagnoses
const getDiagnoses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const diagnoses = yield (0, DepartmentsService_1.getAllDiagnoses)();
        res.json(diagnoses);
    }
    catch (error) {
        console.error("Error fetching diagnoses:", error);
        res.status(500).json({ message: "Failed to fetch diagnoses" });
    }
});
exports.getDiagnoses = getDiagnoses;
// 3. Get diagnoses by department ID
const getDiagnosesForDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departmentId = parseInt(req.params.departmentId);
        const diagnoses = yield (0, DepartmentsService_1.getDiagnosesByDepartment)(departmentId);
        res.json(diagnoses);
    }
    catch (error) {
        console.error("Error fetching diagnoses by department:", error);
        res.status(500).json({ message: "Failed to fetch diagnoses for department" });
    }
});
exports.getDiagnosesForDepartment = getDiagnosesForDepartment;
