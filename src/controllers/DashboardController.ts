import { Request, Response } from "express";
import { DashboardService, getDepartmentCounts, getDashboardSummary  } from "../services/DashboardService";

export class DashboardController {
    static async getDashboard(req: Request, res: Response) {
        try {
            const stats = await DashboardService.getDashboardStats();
            res.json(stats);
        } catch (error) {
            res.status(500).json({ message: "Error fetching dashboard data", error });
        }
    }
}


export const fetchDepartmentCounts = async (req: Request, res: Response) => {
  try {
    const data = await getDepartmentCounts();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching admission counts:", error);
    res.status(500).json({ error: "Failed to fetch admission counts by department" });
  }
};






export const fetchDashboardSummary = async (req: Request, res: Response) => {
  try {
    const summary = await getDashboardSummary();
    res.status(200).json(summary);
  } catch (error) {
    console.error("Dashboard summary error:", error);
    res.status(500).json({ message: "Failed to load dashboard summary" });
  }
};
















