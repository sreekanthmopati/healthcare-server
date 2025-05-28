"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDepartmentCounts = exports.DashboardController = void 0;
const DashboardService_1 = require("../services/DashboardService");
class DashboardController {
    static async getDashboard(req, res) {
        try {
            const stats = await DashboardService_1.DashboardService.getDashboardStats();
            res.json(stats);
        }
        catch (error) {
            res.status(500).json({ message: "Error fetching dashboard data", error });
        }
    }
}
exports.DashboardController = DashboardController;
// export const fetchDepartmentCounts = async (req: Request, res: Response) => {
//     try {
//       const counts = await getDepartmentCounts();
//       console.log("At line 18: in DBC controller.ts", counts);
//       res.status(200).json(counts);
//     } catch (error) {
//       console.error("Error in fetchDepartmentCounts:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
const fetchDepartmentCounts = async (req, res) => {
    try {
        const data = await (0, DashboardService_1.getDepartmentCounts)();
        res.status(200).json(data);
    }
    catch (error) {
        console.error("Error fetching admission counts:", error);
        res.status(500).json({ error: "Failed to fetch admission counts by department" });
    }
};
exports.fetchDepartmentCounts = fetchDepartmentCounts;
