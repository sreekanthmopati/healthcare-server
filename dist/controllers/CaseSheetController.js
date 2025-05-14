"use strict";
// import { Request, Response } from "express";
// import { CaseSheetService } from "../services/CaseSheetService";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllCaseSheetsWithDetails = void 0;
const CaseSheetService_1 = require("../services/CaseSheetService");
// Fetch all case sheets with full relational data
const fetchAllCaseSheetsWithDetails = async (req, res) => {
    try {
        const caseSheets = await (0, CaseSheetService_1.getAllCaseSheetsWithDetails)();
        res.status(200).json(caseSheets);
    }
    catch (error) {
        console.error("Error fetching case sheets:", error);
        res.status(500).json({ message: "Failed to fetch case sheets" });
    }
};
exports.fetchAllCaseSheetsWithDetails = fetchAllCaseSheetsWithDetails;
