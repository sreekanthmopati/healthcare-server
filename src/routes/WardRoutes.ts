import express from "express";
import {
  fetchAllWards,
  fetchAllRooms,
  fetchAllBeds,
  fetchRoomsByWardId,
  fetchBedsByRoomId,
  updateBedToOccupied,
  updateBedToVacant,
  getAvailableBedCountController
} from "../controllers/WardController";

const router = express.Router();

// Routes
router.get("/wards", fetchAllWards);
router.get("/rooms", fetchAllRooms);
router.get("/beds", fetchAllBeds);

// Simplified routes
router.get('/:wardId/available-beds', getAvailableBedCountController);
router.get("/rooms-by-ward/:wardId", fetchRoomsByWardId);
router.get("/beds-by-room/:roomId", fetchBedsByRoomId);
router.patch("/occupy/:bedId", updateBedToOccupied);
router.patch("/vacate/:bedId", updateBedToVacant);







export default router;
