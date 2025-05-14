"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WardController_1 = require("../controllers/WardController");
const router = express_1.default.Router();
// Routes
router.get("/wards", WardController_1.fetchAllWards);
router.get("/rooms", WardController_1.fetchAllRooms);
router.get("/beds", WardController_1.fetchAllBeds);
// Simplified routes
router.get("/rooms-by-ward/:wardId", WardController_1.fetchRoomsByWardId);
router.get("/beds-by-room/:roomId", WardController_1.fetchBedsByRoomId);
router.patch("/occupy/:bedId", WardController_1.updateBedToOccupied);
router.patch("/vacate/:bedId", WardController_1.updateBedToVacant);
exports.default = router;
