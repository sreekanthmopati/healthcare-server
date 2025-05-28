import { Router } from "express";
import {
  fetchAllAdmissions,
  fetchAdmissionById,
  createNewAdmission,
  updateAdmissionById,
  deleteAdmissionById,
  fetchAllAdmissionsWithDetails,
   createBulkAdmissionsController,
   dischargeBulkAdmissions,
   dischargeSingleAdmission
} from "../controllers/AdmissionController";

const router = Router();

//discharging
router.post("/discharge-bulk", dischargeBulkAdmissions);

router.put("/dischargesingle/:admissionId", dischargeSingleAdmission);

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
