"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DashboardController_1 = require("../controllers/DashboardController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.get("/", authMiddleware_1.authenticateToken, DashboardController_1.DashboardController.getDashboard);
router.get("/departments/counts", DashboardController_1.fetchDepartmentCounts);
exports.default = router;
