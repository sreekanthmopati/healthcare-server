"use strict";
// import { Router } from "express";
// import { CaseSheetController } from "../controllers/CaseSheetController";
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// console.log("CaseSheetRoutes loaded!");
// router.get("/:patientId", async (req, res, next) => {
//   try {
//     console.log(`Received request for patient ID: ${req.params.patientId}`);
//     await CaseSheetController.getCaseSheet(req, res);
//   } catch (error) {
//     next(error);
//   }
// });
// router.post("/:patientId", async (req, res, next) => {
//   try {
//     await CaseSheetController.createCaseSheet(req, res);
//   } catch (error) {
//     next(error);
//   }
// });
// router.put("/:patientId", async (req, res, next) => {
//   try {
//     await CaseSheetController.updateCaseSheet(req, res);
//   } catch (error) {
//     next(error);
//   }
// });
// router.delete("/:patientId", async (req, res, next) => {
//   try {
//     await CaseSheetController.deleteCaseSheet(req, res);
//   } catch (error) {
//     next(error);
//   }
// });
// export default router;
const express_1 = require("express");
const CaseSheetController_1 = require("../controllers/CaseSheetController");
const router = (0, express_1.Router)();
// GET all case sheets with full relational data
router.get("/fetchallcasesheetsinfo", CaseSheetController_1.fetchAllCaseSheetsWithDetails);
exports.default = router;
