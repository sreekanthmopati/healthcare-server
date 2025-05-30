"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDischargeReasons = void 0;
const DischargeReasonsService_1 = require("../services/DischargeReasonsService");
// Get all discharge reasons
const getDischargeReasons = async (req, res) => {
    try {
        const dischargeReasons = await (0, DischargeReasonsService_1.getAllDischargeReasons)();
        res.json(dischargeReasons);
    }
    catch (error) {
        console.error("Error fetching discharge reasons:", error);
        res.status(500).json({ message: "Failed to fetch discharge reasons" });
    }
};
exports.getDischargeReasons = getDischargeReasons;
