import express from "express";
import { getDischargeReasons } from "../controllers/DischargeReasonsController";

const router = express.Router();

// GET /api/discharge-reasons
router.get("/getlist", getDischargeReasons);

export default router;
