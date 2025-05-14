import express from "express";
import { DashboardController, fetchDepartmentCounts  } from "../controllers/DashboardController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authenticateToken, DashboardController.getDashboard);
router.get("/departments/counts", fetchDepartmentCounts);


export default router;