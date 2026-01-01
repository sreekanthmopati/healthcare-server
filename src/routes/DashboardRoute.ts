import express from "express";
import { DashboardController, fetchDepartmentCounts, fetchDashboardSummary } from "../controllers/DashboardController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();
router.use(authenticateToken);
router.get("/", DashboardController.getDashboard);
router.get("/departments/counts", fetchDepartmentCounts);
router.get("/summary", fetchDashboardSummary);

export default router;