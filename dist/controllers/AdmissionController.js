"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBulkAdmissionsController = exports.fetchAllAdmissionsWithDetails = exports.deleteAdmissionById = exports.updateAdmissionById = exports.createNewAdmission = exports.fetchAdmissionById = exports.fetchAllAdmissions = void 0;
const AdmissionService_1 = require("../services/AdmissionService");
// 1. Get all admissions
const fetchAllAdmissions = async (req, res) => {
    try {
        const admissions = await (0, AdmissionService_1.getAllAdmissions)();
        res.json(admissions);
    }
    catch (error) {
        console.error("Error fetching admissions:", error);
        res.status(500).json({ message: "Failed to fetch admissions" });
    }
};
exports.fetchAllAdmissions = fetchAllAdmissions;
// 2. Get admission by ID
const fetchAdmissionById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const admission = await (0, AdmissionService_1.getAdmissionById)(id);
        res.json(admission);
    }
    catch (error) {
        console.error("Error fetching admission:", error);
        res.status(500).json({ message: "Failed to fetch admission" });
    }
};
exports.fetchAdmissionById = fetchAdmissionById;
const createNewAdmission = async (req, res) => {
    try {
        const { PatientID, bed_id, category, diagnosis_id, admission_date, discharge_date, discharge_reason, treatment_plan, remarks, } = req.body;
        const admission = await (0, AdmissionService_1.createAdmission)({
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
};
exports.createNewAdmission = createNewAdmission;
// 4. Update admission
const updateAdmissionById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updates = req.body;
        const updated = await (0, AdmissionService_1.updateAdmission)(id, updates);
        res.json(updated);
    }
    catch (error) {
        console.error("Error updating admission:", error);
        res.status(500).json({ message: "Failed to update admission" });
    }
};
exports.updateAdmissionById = updateAdmissionById;
// 5. Delete admission
const deleteAdmissionById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await (0, AdmissionService_1.deleteAdmission)(id);
        res.json({ message: "Admission deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting admission:", error);
        res.status(500).json({ message: "Failed to delete admission" });
    }
};
exports.deleteAdmissionById = deleteAdmissionById;
const fetchAllAdmissionsWithDetails = async (req, res) => {
    try {
        const admissions = await (0, AdmissionService_1.getAllAdmissionsWithDetails)();
        res.status(200).json(admissions);
    }
    catch (error) {
        console.error("Fetch Admissions Error:", error); // Log it on server
        res.status(500).json({
            message: "Failed to fetch admission",
            error: error.message,
        });
    }
};
exports.fetchAllAdmissionsWithDetails = fetchAllAdmissionsWithDetails;
const createBulkAdmissionsController = async (req, res) => {
    try {
        const { admissions, admissionDate, remarks } = req.body;
        if (!Array.isArray(admissions) || admissions.length === 0) {
            res.status(400).json({
                success: false,
                message: "Invalid admissions data",
            });
            return;
        }
        // Validate and prepare admission data
        const admissionData = admissions.map((adm) => ({
            departmentId: Number(adm.departmentId),
            wardId: Number(adm.wardId),
            diagnosisId: Number(adm.diagnosisId),
            count: Number(adm.count),
            admissionDate: new Date(admissionDate),
            remarks: remarks || "Bulk admission",
        }));
        const results = await (0, AdmissionService_1.createBulkAdmissions)(admissionData);
        // Calculate totals
        const totalSuccess = results.reduce((sum, r) => sum + (r.success || 0), 0);
        const totalFailed = results.reduce((sum, r) => sum + (r.failed || 0), 0);
        if (totalFailed > 0) {
            res.status(207).json({
                success: true,
                totalSuccess,
                totalFailed,
                results,
                message: `Bulk admission completed with partial success (${totalSuccess} succeeded, ${totalFailed} failed)`,
            });
            return;
        }
        res.status(201).json({
            success: true,
            totalSuccess,
            results,
            message: "All admissions processed successfully",
        });
    }
    catch (error) {
        console.error("Error in bulk admission:", error);
        res.status(500).json({
            success: false,
            message: "Failed to process bulk admissions",
        });
    }
};
exports.createBulkAdmissionsController = createBulkAdmissionsController;
