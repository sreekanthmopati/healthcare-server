import { Router } from "express";
import {
  fetchAllAdmissions,
  fetchAdmissionById,
  createNewAdmission,
  updateAdmissionById,
  deleteAdmissionById,
  fetchAllAdmissionsWithDetails,
  checkBedAvailability,
  createBulkAdmissionsHandler,
  getAvailableBedsHandler
} from "../controllers/AdmissionController";

const router = Router();

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









router.post("/check-beds", checkBedAvailability);

// POST create bulk admissions
router.post("/bulk-admitting", createBulkAdmissionsHandler);

// GET available beds by room
router.get("/available-beds/:roomId", getAvailableBedsHandler);








export default router;
