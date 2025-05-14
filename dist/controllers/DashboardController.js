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
exports.fetchDepartmentCounts = exports.DashboardController = void 0;
const DashboardService_1 = require("../services/DashboardService");
class DashboardController {
    static getDashboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stats = yield DashboardService_1.DashboardService.getDashboardStats();
                res.json(stats);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching dashboard data", error });
            }
        });
    }
}
exports.DashboardController = DashboardController;
const fetchDepartmentCounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const counts = yield (0, DashboardService_1.getDepartmentCounts)();
        console.log("At line 18: in DBC controller.ts", counts);
        res.status(200).json(counts);
    }
    catch (error) {
        console.error("Error in fetchDepartmentCounts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.fetchDepartmentCounts = fetchDepartmentCounts;
