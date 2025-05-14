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
exports.getDepartmentCounts = exports.DashboardService = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
class DashboardService {
    static getDashboardStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalPatients = yield prisma.patients.count();
            const totalAppointments = yield prisma.appointments.count();
            const totalDoctors = yield prisma.doctors.count();
            return { totalPatients, totalAppointments, totalDoctors };
        });
    }
}
exports.DashboardService = DashboardService;
const getDepartmentCounts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dentalCount = yield prisma.patients.count({ where: { DepartmentName: "Dental" } });
        const entCount = yield prisma.patients.count({ where: { DepartmentName: "ENT" } });
        const cardioCount = yield prisma.patients.count({ where: { DepartmentName: "Cardiology" } });
        const dermaCount = yield prisma.patients.count({ where: { DepartmentName: "Dermatology" } });
        const neuroCount = yield prisma.patients.count({ where: { DepartmentName: "Neurology" } });
        const opthaCount = yield prisma.patients.count({ where: { DepartmentName: "Opthamology" } });
        const pulmaCount = yield prisma.patients.count({ where: { DepartmentName: "Pulmanology" } });
        const gynaCount = yield prisma.patients.count({ where: { DepartmentName: "Gynacology" } });
        const generalMedCount = yield prisma.patients.count({ where: { DepartmentName: "General Medicine" } });
        const otrhoCount = yield prisma.patients.count({ where: { DepartmentName: "Ortho" } });
        const dvlCount = yield prisma.patients.count({ where: { DepartmentName: "DVL" } });
        console.log("At line 28: in DBC services.ts", generalMedCount);
        return { dental: dentalCount, ent: entCount, cardio: cardioCount, derma: dermaCount, neuro: neuroCount,
            pulmna: pulmaCount, gyna: gynaCount, generalmed: generalMedCount, ortho: otrhoCount, dvl: dvlCount, optha: opthaCount };
    }
    catch (error) {
        console.error("Error fetching department counts:", error);
        throw new Error("Database query failed");
    }
});
exports.getDepartmentCounts = getDepartmentCounts;
