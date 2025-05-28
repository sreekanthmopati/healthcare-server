"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartmentCounts = exports.DashboardService = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
class DashboardService {
    static async getDashboardStats() {
        const totalPatients = await prisma.patients.count();
        const totalAppointments = await prisma.appointments.count();
        const totalDoctors = await prisma.doctors.count();
        return { totalPatients, totalAppointments, totalDoctors };
    }
}
exports.DashboardService = DashboardService;
// export const getDepartmentCounts = async () => {
//     try {
//       const dentalCount = await prisma.patients.count({ where: { DepartmentName: "Dental" } });
//       const entCount = await prisma.patients.count({ where: { DepartmentName: "ENT" } });
//       const cardioCount = await prisma.patients.count({ where: { DepartmentName: "Cardiology" } } );
//       const dermaCount = await prisma.patients.count({ where: { DepartmentName: "Dermatology" } });
//       const neuroCount = await prisma.patients.count({ where: { DepartmentName: "Neurology" } });
//       const opthaCount = await prisma.patients.count({ where: { DepartmentName: "Opthamology" } } );
//       const pulmaCount = await prisma.patients.count({ where: { DepartmentName: "Pulmanology" } });
//       const gynaCount = await prisma.patients.count({ where: { DepartmentName: "Gynacology" } });
//       const generalMedCount = await prisma.patients.count({ where: { DepartmentName: "General Medicine" } } );
//       const otrhoCount = await prisma.patients.count({ where: { DepartmentName: "Ortho" } });
//       const dvlCount = await prisma.patients.count({ where: { DepartmentName: "DVL" } } );
//       console.log("At line 28: in DBC services.ts", generalMedCount);
//       return { dental: dentalCount, ent: entCount, cardio: cardioCount, derma: dermaCount, neuro: neuroCount, 
//         pulmna: pulmaCount, gyna: gynaCount, generalmed: generalMedCount, ortho: otrhoCount, dvl: dvlCount, optha: opthaCount          };
//     } catch (error) {
//       console.error("Error fetching department counts:", error);
//       throw new Error("Database query failed");
//     }
//   };
const getDepartmentCounts = async () => {
    // Get all departments
    const departments = await prisma.departments.findMany({
        include: {
            Diagnoses: {
                include: {
                    admissions: true,
                },
            },
        },
    });
    // Map through departments to get admission count
    const result = departments.map((dept) => {
        const allAdmissions = dept.Diagnoses.flatMap((diag) => diag.admissions);
        return {
            departmentId: dept.DepartmentID,
            departmentName: dept.DepartmentName,
            admissionCount: allAdmissions.length,
        };
    });
    return result;
};
exports.getDepartmentCounts = getDepartmentCounts;
