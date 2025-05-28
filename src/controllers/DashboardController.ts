import { Request, Response } from "express";
import { DashboardService, getDepartmentCounts  } from "../services/DashboardService";

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


export const fetchDepartmentCounts = async (req: Request, res: Response) => {
  try {
    const data = await getDepartmentCounts();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching admission counts:", error);
    res.status(500).json({ error: "Failed to fetch admission counts by department" });
  }
};