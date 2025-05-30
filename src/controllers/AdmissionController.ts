import { Request, Response } from "express";
import {
  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
  getAllAdmissionsWithDetails,
  createBulkAdmissions,
 dischargeAdmission,
 dischargeBulkAdmissions
} from "../services/AdmissionService";

// 1. Get all admissions
export const fetchAllAdmissions = async (req: Request, res: Response) => {
  try {
    const admissions = await getAllAdmissions();
    res.json(admissions);
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ message: "Failed to fetch admissions" });
  }
};

// 2. Get admission by ID
export const fetchAdmissionById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const admission = await getAdmissionById(id);
    res.json(admission);
  } catch (error) {
    console.error("Error fetching admission:", error);
    res.status(500).json({ message: "Failed to fetch admission" });
  }
};

export const createNewAdmission = async (req: Request, res: Response) => {
    try {
      const {
        PatientID,
        bed_id,
        category,
        diagnosis_id,
        admission_date,
        discharge_date,
        discharge_reason,
        treatment_plan,
        remarks,
      } = req.body;
  
      const admission = await createAdmission({
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
    } catch (error) {
      console.error("Error creating admission:", error);
      res.status(500).json({ message: "Failed to create admission" });
    }
  };
  

// 4. Update admission
export const updateAdmissionById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const updates = req.body;

    const updated = await updateAdmission(id, updates);
    res.json(updated);
  } catch (error) {
    console.error("Error updating admission:", error);
    res.status(500).json({ message: "Failed to update admission" });
  }
};

// 5. Delete admission
export const deleteAdmissionById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteAdmission(id);
    res.json({ message: "Admission deleted successfully" });
  } catch (error) {
    console.error("Error deleting admission:", error);
    res.status(500).json({ message: "Failed to delete admission" });
  }
};



export const fetchAllAdmissionsWithDetails = async (req: Request, res: Response) => {
  try {
    const admissions = await getAllAdmissionsWithDetails();
    res.status(200).json(admissions);
  } catch (error) {
    console.error("Fetch Admissions Error:", error); // Log it on server
    res.status(500).json({
      message: "Failed to fetch admission",
      error: (error as Error).message,
    });
  }
};















export const createBulkAdmissionsController = async (req: Request, res: Response) => {
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
    const admissionData = admissions.map((adm: any) => ({
      departmentId: Number(adm.departmentId),
      wardId: Number(adm.wardId),
      diagnosisId: Number(adm.diagnosisId),
      count: Number(adm.count),
      admissionDate: new Date(admissionDate),
      remarks: remarks || "Bulk admission",
    }));

    const results = await createBulkAdmissions(admissionData);

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
  } catch (error) {
    console.error("Error in bulk admission:", error);
     res.status(500).json({
      success: false,
      message: "Failed to process bulk admissions",
    });
  }
};



export const dischargeSingleAdmission = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { dischargeReasonId } = req.body;

    const updatedAdmission = await dischargeAdmission(id, dischargeReasonId);
    res.json(updatedAdmission);
  } catch (error) {
    console.error("Error discharging admission:", error);
    res.status(500).json({ message: "Failed to discharge admission" });
  }
};


export const dischargeMultipleAdmissions = async (req: Request, res: Response) => {
  try {
    const { admissionIds } = req.body;

    if (!Array.isArray(admissionIds) || !admissionIds.every(id => typeof id === "number")) {
      res.status(400).json({ error: "admissionIds must be an array of numbers" });
      return;
    }

    const result = await dischargeBulkAdmissions(admissionIds);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error during bulk discharge:", error);
    res.status(500).json({ error: "Bulk discharge failed" });
  }
};







