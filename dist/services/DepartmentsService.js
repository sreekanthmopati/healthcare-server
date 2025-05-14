"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiagnosesByDepartment = exports.getAllDiagnoses = exports.getAllDepartments = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
// 1. Get all departments
const getAllDepartments = async () => {
    return await prisma.departments.findMany();
};
exports.getAllDepartments = getAllDepartments;
// 2. Get all diagnoses
const getAllDiagnoses = async () => {
    return await prisma.diagnoses.findMany({
        include: {
            Departments: {
                select: { DepartmentName: true }
            }
        }
    });
};
exports.getAllDiagnoses = getAllDiagnoses;
// 3. Get diagnoses by department ID
const getDiagnosesByDepartment = async (departmentId) => {
    return await prisma.diagnoses.findMany({
        where: { DepartmentID: departmentId },
        include: {
            Departments: {
                select: { DepartmentName: true }
            }
        }
    });
};
exports.getDiagnosesByDepartment = getDiagnosesByDepartment;
