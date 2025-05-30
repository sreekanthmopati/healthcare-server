import { Router } from "express";
import {
  fetchAllAdmissions,
  fetchAdmissionById,
  createNewAdmission,
  updateAdmissionById,
  deleteAdmissionById,
  fetchAllAdmissionsWithDetails,
   createBulkAdmissionsController,
   dischargeSingleAdmission,
   dischargeMultipleAdmissions
   
} from "../controllers/AdmissionController";

const router = Router();
router.put("/discharge/bulk", dischargeMultipleAdmissions);
router.put("/discharge/:id", dischargeSingleAdmission);




router.post("/bulk",createBulkAdmissionsController);

// GET all admissions
router.get("/", fetchAllAdmissions);

// GET all admissions with patient and bed info
router.get("/fetchalladminfo",fetchAllAdmissionsWithDetails);

// GET admission by ID
router.get("/:id", fetchAdmissionById);

// POST create admission
router.post("/", createNewAdmission);

// PUT update admission
router.put("/:id", updateAdmissionById);



// DELETE admission
router.delete("/:id", deleteAdmissionById);





export default router;
