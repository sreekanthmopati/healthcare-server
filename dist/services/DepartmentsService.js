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
exports.getDiagnosesByDepartment = exports.getAllDiagnoses = exports.getAllDepartments = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
// 1. Get all departments
const getAllDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.departments.findMany();
});
exports.getAllDepartments = getAllDepartments;
// 2. Get all diagnoses
const getAllDiagnoses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.diagnoses.findMany({
        include: {
            Departments: {
                select: { DepartmentName: true }
            }
        }
    });
});
exports.getAllDiagnoses = getAllDiagnoses;
// 3. Get diagnoses by department ID
const getDiagnosesByDepartment = (departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.diagnoses.findMany({
        where: { DepartmentID: departmentId },
        include: {
            Departments: {
                select: { DepartmentName: true }
            }
        }
    });
});
exports.getDiagnosesByDepartment = getDiagnosesByDepartment;
