import { PrismaClient } from "../../prisma/orm";

const prisma = new PrismaClient();

export class DashboardService {
    static async getDashboardStats() {
        const totalPatients = await prisma.patients.count();
        const totalAppointments = await prisma.appointments.count();
        const totalDoctors = await prisma.doctors.count();

        return { totalPatients, totalAppointments, totalDoctors };
    }
}


export const getDepartmentCounts = async () => {
  // Get all departments
  const departments = await prisma.departments.findMany({
    include: {
      Diagnoses: {
        include: {
          admissions: {
            where: {
              is_discharged: false, // ⬅️ Only include active admissions
            },
          },
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








export const getDashboardSummary = async () => {
  // 1️⃣ Define today boundaries (IMPORTANT)
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  // 2️⃣ Run all queries in ONE transaction
  const [
    umrToday,
    ipToday,
    dischargesToday,
    occupiedBeds,
    departments
  ] = await prisma.$transaction([
    // UMR registered today
    prisma.patients.count({
      where: {
        PatientRegistrationDate: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    }),

    // IP admissions today
    prisma.admissions.count({
      where: {
        admission_date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    }),

    // Discharges today
    prisma.admissions.count({
      where: {
        discharge_date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    }),

    // On-bed count (CURRENT)
    prisma.bed.count({
      where: {
        occupied_status: "Occupied",
      },
    }),

    // Department-wise CURRENT IP
    prisma.departments.findMany({
      select: {
        DepartmentName: true,
        Diagnoses: {
          select: {
            admissions: {
              where: {
                discharge_date: null,
              },
            },
          },
        },
      },
    }),
  ]);

  // 3️⃣ Transform department-wise data
  const departmentCounts = departments.map((dept) => ({
    name: dept.DepartmentName,
    count: dept.Diagnoses.reduce(
      (sum, d) => sum + d.admissions.length,
      0
    ),
  }));

  // 4️⃣ Derived values (NO frontend logic)
  const opToday = umrToday - ipToday;

  return {
    umrToday,
    ipToday,
    opToday,
    opBills: opToday, // free hospital rule
    dischargesToday,
    onBedCount: occupiedBeds,
    departmentCounts,
  };
};