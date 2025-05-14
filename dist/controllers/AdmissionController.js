"use strict";
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
exports.getAvailableBedsHandler = exports.createBulkAdmissionsHandler = exports.checkBedAvailability = exports.fetchAllAdmissionsWithDetails = exports.deleteAdmissionById = exports.updateAdmissionById = exports.createNewAdmission = exports.fetchAdmissionById = exports.fetchAllAdmissions = void 0;
const AdmissionService_1 = require("../services/AdmissionService");
// 1. Get all admissions
const fetchAllAdmissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admissions = yield (0, AdmissionService_1.getAllAdmissions)();
        res.json(admissions);
    }
    catch (error) {
        console.error("Error fetching admissions:", error);
        res.status(500).json({ message: "Failed to fetch admissions" });
    }
});
exports.fetchAllAdmissions = fetchAllAdmissions;
// 2. Get admission by ID
const fetchAdmissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const admission = yield (0, AdmissionService_1.getAdmissionById)(id);
        res.json(admission);
    }
    catch (error) {
        console.error("Error fetching admission:", error);
        res.status(500).json({ message: "Failed to fetch admission" });
    }
});
exports.fetchAdmissionById = fetchAdmissionById;
const createNewAdmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { PatientID, bed_id, category, diagnosis_id, admission_date, discharge_date, discharge_reason, treatment_plan, remarks, } = req.body;
        const admission = yield (0, AdmissionService_1.createAdmission)({
            PatientID,
            bed_id,
            category,
            diagnosis_id,
            admission_date: new Date(admission_date),
            discharge_date: discharge_date ? new Date(discharge_date) : undefined,
            discharge_reason,
            treatment_plan,
            remarks,
        });
        res.status(201).json(admission);
    }
    catch (error) {
        console.error("Error creating admission:", error);
        res.status(500).json({ message: "Failed to create admission" });
    }
});
exports.createNewAdmission = createNewAdmission;
// 4. Update admission
const updateAdmissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const updates = req.body;
        const updated = yield (0, AdmissionService_1.updateAdmission)(id, updates);
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating admission:", error);
        res.status(500).json({ message: "Failed to update admission" });
    }
});
exports.updateAdmissionById = updateAdmissionById;
// 5. Delete admission
const deleteAdmissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield (0, AdmissionService_1.deleteAdmission)(id);
        res.json({ message: "Admission deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting admission:", error);
        res.status(500).json({ message: "Failed to delete admission" });
    }
});
exports.deleteAdmissionById = deleteAdmissionById;
const fetchAllAdmissionsWithDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admissions = yield (0, AdmissionService_1.getAllAdmissionsWithDetails)();
        res.status(200).json(admissions);
    }
    catch (error) {
        console.error("Fetch Admissions Error:", error); // Log it on server
        res.status(500).json({
            message: "Failed to fetch admission",
            error: error.message,
        });
    }
});
exports.fetchAllAdmissionsWithDetails = fetchAllAdmissionsWithDetails;
// Check bed availability for bulk admission
const checkBedAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bedIds } = req.body;
        if (!Array.isArray(bedIds)) {
            res.status(400).json({ message: "bedIds must be an array" });
        }
        const result = yield (0, AdmissionService_1.checkBulkBedAvailability)(bedIds);
        res.json(result);
    }
    catch (error) {
        console.error("Error checking bed availability:", error);
        res.status(500).json({
            message: "Failed to check bed availability",
            error: error.message
        });
    }
});
exports.checkBedAvailability = checkBedAvailability;
// Create bulk admissions
const createBulkAdmissionsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admissionsData = req.body;
        if (!Array.isArray(admissionsData)) {
            res.status(400).json({ message: "Request body must be an array" });
        }
        // Validate each admission data
        for (const data of admissionsData) {
            if (!data.PatientID || !data.bed_id || !data.admission_date || !data.diagnosis_id) {
                res.status(400).json({
                    message: "Each admission must include PatientID, bed_id, admission_date, and diagnosis_id"
                });
            }
        }
        const result = yield (0, AdmissionService_1.createBulkAdmissions)(admissionsData);
        res.status(201).json(result);
    }
    catch (error) {
        console.error("Error creating bulk admissions:", error);
        res.status(500).json({
            message: "Failed to create bulk admissions",
            error: error.message
        });
    }
});
exports.createBulkAdmissionsHandler = createBulkAdmissionsHandler;
// Get available beds by room
const getAvailableBedsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomId = parseInt(req.params.roomId);
        if (isNaN(roomId)) {
            res.status(400).json({ message: "Invalid room ID" });
        }
        const beds = yield (0, AdmissionService_1.getAvailableBedsByRoom)(roomId);
        res.json(beds);
    }
    catch (error) {
        console.error("Error fetching available beds:", error);
        res.status(500).json({
            message: "Failed to fetch available beds",
            error: error.message
        });
    }
});
exports.getAvailableBedsHandler = getAvailableBedsHandler;
