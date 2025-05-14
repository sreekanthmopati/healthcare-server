"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DepartmentsController_1 = require("../controllers/DepartmentsController");
const router = express_1.default.Router();
router.get("/departments", DepartmentsController_1.getDepartments);
router.get("/diagnoses", DepartmentsController_1.getDiagnoses);
router.get("/diagnoses/:departmentId", DepartmentsController_1.getDiagnosesForDepartment);
exports.default = router;
