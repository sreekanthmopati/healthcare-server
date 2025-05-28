"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdmissionController_1 = require("../controllers/AdmissionController");
const router = (0, express_1.Router)();
router.post("/bulk", AdmissionController_1.createBulkAdmissionsController);
// GET all admissions
router.get("/", AdmissionController_1.fetchAllAdmissions);
// GET all admissions with patient and bed info
router.get("/fetchalladminfo", AdmissionController_1.fetchAllAdmissionsWithDetails);
// GET admission by ID
router.get("/:id", AdmissionController_1.fetchAdmissionById);
// POST create admission
router.post("/", AdmissionController_1.createNewAdmission);
// PUT update admission
router.put("/:id", AdmissionController_1.updateAdmissionById);
// DELETE admission
router.delete("/:id", AdmissionController_1.deleteAdmissionById);
exports.default = router;
