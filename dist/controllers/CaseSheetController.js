"use strict";
// import { Request, Response } from "express";
// import { CaseSheetService } from "../services/CaseSheetService";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllCaseSheetsWithDetails = void 0;
const CaseSheetService_1 = require("../services/CaseSheetService");
// Fetch all case sheets with full relational data
const fetchAllCaseSheetsWithDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const caseSheets = yield (0, CaseSheetService_1.getAllCaseSheetsWithDetails)();
        res.status(200).json(caseSheets);
    }
    catch (error) {
        console.error("Error fetching case sheets:", error);
        res.status(500).json({ message: "Failed to fetch case sheets" });
    }
});
exports.fetchAllCaseSheetsWithDetails = fetchAllCaseSheetsWithDetails;
