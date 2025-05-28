import { Request, Response } from "express";
import { getAllDischargeReasons } from "../services/DischargeReasonsService";

// Get all discharge reasons
export const getDischargeReasons = async (req: Request, res: Response) => {
  try {
    const dischargeReasons = await getAllDischargeReasons();
    res.json(dischargeReasons);
  } catch (error) {
    console.error("Error fetching discharge reasons:", error);
    res.status(500).json({ message: "Failed to fetch discharge reasons" });
  }
};
