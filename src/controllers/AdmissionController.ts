import { Request, Response } from "express";
import {
  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
  getAllAdmissionsWithDetails,
  checkBulkBedAvailability,
  createBulkAdmissions,
  getAvailableBedsByRoom
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
















// Check bed availability for bulk admission
export const checkBedAvailability = async (req: Request, res: Response) => {
  try {
    const { bedIds } = req.body;
    if (!Array.isArray(bedIds)) {
       res.status(400).json({ message: "bedIds must be an array" });
    }

    const result = await checkBulkBedAvailability(bedIds);
    res.json(result);
  } catch (error) {
    console.error("Error checking bed availability:", error);
    res.status(500).json({ 
      message: "Failed to check bed availability",
      error: (error as Error).message 
    });
  }
};

// Create bulk admissions
export const createBulkAdmissionsHandler = async (req: Request, res: Response) => {
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

    const result = await createBulkAdmissions(admissionsData);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating bulk admissions:", error);
    res.status(500).json({ 
      message: "Failed to create bulk admissions",
      error: (error as Error).message 
    });
  }
};

// Get available beds by room
export const getAvailableBedsHandler = async (req: Request, res: Response) => {
  try {
    const roomId = parseInt(req.params.roomId);
    if (isNaN(roomId)) {
       res.status(400).json({ message: "Invalid room ID" });
    }

    const beds = await getAvailableBedsByRoom(roomId);
    res.json(beds);
  } catch (error) {
    console.error("Error fetching available beds:", error);
    res.status(500).json({ 
      message: "Failed to fetch available beds",
      error: (error as Error).message 
    });
  }
};





