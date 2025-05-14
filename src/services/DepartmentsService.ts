import { PrismaClient } from "../../prisma/orm";

const prisma = new PrismaClient();

// 1. Get all departments
export const getAllDepartments = async () => {
  return await prisma.departments.findMany();
};

// 2. Get all diagnoses
export const getAllDiagnoses = async () => {
  return await prisma.diagnoses.findMany({
    include: {
      Departments: {
        select: { DepartmentName: true }
      }
    }
  });
};

// 3. Get diagnoses by department ID
export const getDiagnosesByDepartment = async (departmentId: number) => {
  return await prisma.diagnoses.findMany({
    where: { DepartmentID: departmentId },
    include: {
      Departments: {
        select: { DepartmentName: true }
      }
    }
  });
};
