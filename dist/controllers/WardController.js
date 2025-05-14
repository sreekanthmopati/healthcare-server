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
exports.updateBedToVacant = exports.updateBedToOccupied = exports.fetchBedsByRoomId = exports.fetchRoomsByWardId = exports.fetchAllBeds = exports.fetchAllRooms = exports.fetchAllWards = void 0;
const WardService_1 = require("../services/WardService");
// 1. Get all wards
const fetchAllWards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wards = yield (0, WardService_1.getAllWards)();
        res.json(wards);
    }
    catch (error) {
        console.error("Error fetching wards:", error);
        res.status(500).json({ message: "Failed to fetch wards" });
    }
});
exports.fetchAllWards = fetchAllWards;
// 2. Get all rooms
const fetchAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, WardService_1.getAllRooms)();
        res.json(rooms);
    }
    catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ message: "Failed to fetch rooms" });
    }
});
exports.fetchAllRooms = fetchAllRooms;
// 3. Get all beds
const fetchAllBeds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beds = yield (0, WardService_1.getAllBeds)();
        res.json(beds);
    }
    catch (error) {
        console.error("Error fetching beds:", error);
        res.status(500).json({ message: "Failed to fetch beds" });
    }
});
exports.fetchAllBeds = fetchAllBeds;
// 4. Get rooms by ward ID
const fetchRoomsByWardId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wardId = parseInt(req.params.wardId);
        const rooms = yield (0, WardService_1.getRoomsByWardId)(wardId);
        res.json(rooms);
    }
    catch (error) {
        console.error("Error fetching rooms by ward ID:", error);
        res.status(500).json({ message: "Failed to fetch rooms for ward" });
    }
});
exports.fetchRoomsByWardId = fetchRoomsByWardId;
// 5. Get beds by room ID
const fetchBedsByRoomId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomId = parseInt(req.params.roomId);
        const beds = yield (0, WardService_1.getBedsByRoomId)(roomId);
        res.json(beds);
    }
    catch (error) {
        console.error("Error fetching beds by room ID:", error);
        res.status(500).json({ message: "Failed to fetch beds for room" });
    }
});
exports.fetchBedsByRoomId = fetchBedsByRoomId;
const updateBedToOccupied = (req, res, next // Add next parameter to match Express types
) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bedId = parseInt(req.params.bedId);
        if (isNaN(bedId)) {
            res.status(400).json({ success: false, message: "Invalid bed ID" });
            return; // Use return without value
        }
        const bed = yield (0, WardService_1.getBedById)(bedId);
        if (!bed) {
            res.status(404).json({ success: false, message: "Bed not found" });
            return;
        }
        if (bed.occupied_status === "Occupied") {
            res.status(200).json({
                success: true,
                message: "Bed is already occupied",
                data: bed
            });
            return;
        }
        const updatedBed = yield (0, WardService_1.occupyBed)(bedId);
        res.status(200).json({
            success: true,
            message: "Bed occupied successfully",
            data: updatedBed
        });
    }
    catch (error) {
        next(error); // Pass errors to Express's error handler
    }
});
exports.updateBedToOccupied = updateBedToOccupied;
// Do the same for updateBedToVacant
const updateBedToVacant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bedId = parseInt(req.params.bedId);
        if (isNaN(bedId)) {
            res.status(400).json({ success: false, message: "Invalid bed ID" });
            return;
        }
        const bed = yield (0, WardService_1.getBedById)(bedId);
        if (!bed) {
            res.status(404).json({ success: false, message: "Bed not found" });
            return;
        }
        if (bed.occupied_status === "Vacant") {
            res.status(200).json({
                success: true,
                message: "Bed is already vacant",
                data: bed
            });
            return;
        }
        const updatedBed = yield (0, WardService_1.vacateBed)(bedId);
        res.status(200).json({
            success: true,
            message: "Bed vacated successfully",
            data: updatedBed
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateBedToVacant = updateBedToVacant;
