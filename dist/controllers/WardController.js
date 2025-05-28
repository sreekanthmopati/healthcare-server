"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableBedCountController = exports.updateBedToVacant = exports.updateBedToOccupied = exports.fetchBedsByRoomId = exports.fetchRoomsByWardId = exports.fetchAllBeds = exports.fetchAllRooms = exports.fetchAllWards = void 0;
const WardService_1 = require("../services/WardService");
// 1. Get all wards
const fetchAllWards = async (req, res) => {
    try {
        const wards = await (0, WardService_1.getAllWards)();
        res.json(wards);
    }
    catch (error) {
        console.error("Error fetching wards:", error);
        res.status(500).json({ message: "Failed to fetch wards" });
    }
};
exports.fetchAllWards = fetchAllWards;
// 2. Get all rooms
const fetchAllRooms = async (req, res) => {
    try {
        const rooms = await (0, WardService_1.getAllRooms)();
        res.json(rooms);
    }
    catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ message: "Failed to fetch rooms" });
    }
};
exports.fetchAllRooms = fetchAllRooms;
// 3. Get all beds
const fetchAllBeds = async (req, res) => {
    try {
        const beds = await (0, WardService_1.getAllBeds)();
        res.json(beds);
    }
    catch (error) {
        console.error("Error fetching beds:", error);
        res.status(500).json({ message: "Failed to fetch beds" });
    }
};
exports.fetchAllBeds = fetchAllBeds;
// 4. Get rooms by ward ID
const fetchRoomsByWardId = async (req, res) => {
    try {
        const wardId = parseInt(req.params.wardId);
        const rooms = await (0, WardService_1.getRoomsByWardId)(wardId);
        res.json(rooms);
    }
    catch (error) {
        console.error("Error fetching rooms by ward ID:", error);
        res.status(500).json({ message: "Failed to fetch rooms for ward" });
    }
};
exports.fetchRoomsByWardId = fetchRoomsByWardId;
// 5. Get beds by room ID
const fetchBedsByRoomId = async (req, res) => {
    try {
        const roomId = parseInt(req.params.roomId);
        const beds = await (0, WardService_1.getBedsByRoomId)(roomId);
        res.json(beds);
    }
    catch (error) {
        console.error("Error fetching beds by room ID:", error);
        res.status(500).json({ message: "Failed to fetch beds for room" });
    }
};
exports.fetchBedsByRoomId = fetchBedsByRoomId;
const updateBedToOccupied = async (req, res, next // Add next parameter to match Express types
) => {
    try {
        const bedId = parseInt(req.params.bedId);
        if (isNaN(bedId)) {
            res.status(400).json({ success: false, message: "Invalid bed ID" });
            return; // Use return without value
        }
        const bed = await (0, WardService_1.getBedById)(bedId);
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
        const updatedBed = await (0, WardService_1.occupyBed)(bedId);
        res.status(200).json({
            success: true,
            message: "Bed occupied successfully",
            data: updatedBed
        });
    }
    catch (error) {
        next(error); // Pass errors to Express's error handler
    }
};
exports.updateBedToOccupied = updateBedToOccupied;
// Do the same for updateBedToVacant
const updateBedToVacant = async (req, res, next) => {
    try {
        const bedId = parseInt(req.params.bedId);
        if (isNaN(bedId)) {
            res.status(400).json({ success: false, message: "Invalid bed ID" });
            return;
        }
        const bed = await (0, WardService_1.getBedById)(bedId);
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
        const updatedBed = await (0, WardService_1.vacateBed)(bedId);
        res.status(200).json({
            success: true,
            message: "Bed vacated successfully",
            data: updatedBed
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateBedToVacant = updateBedToVacant;
const getAvailableBedCountController = async (req, res) => {
    try {
        const wardId = Number(req.params.wardId);
        if (isNaN(wardId)) {
            res.status(400).json({
                success: false,
                message: 'Invalid ward ID',
            });
        }
        const count = await (0, WardService_1.getAvailableBedCount)(wardId);
        res.status(200).json({
            success: true,
            availableBeds: count,
        });
    }
    catch (error) {
        console.error("Error fetching available bed count:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch available bed count',
        });
    }
};
exports.getAvailableBedCountController = getAvailableBedCountController;
