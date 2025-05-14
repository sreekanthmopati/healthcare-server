"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vacateBed = exports.occupyBed = exports.getBedById = exports.getBedsByRoomId = exports.getRoomsByWardId = exports.getAllBeds = exports.getAllRooms = exports.getAllWards = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
// 1. Get all wards
const getAllWards = async () => {
    return await prisma.ward.findMany();
};
exports.getAllWards = getAllWards;
// 2. Get all rooms
const getAllRooms = async () => {
    return await prisma.room.findMany();
};
exports.getAllRooms = getAllRooms;
// 3. Get all beds
const getAllBeds = async () => {
    return await prisma.bed.findMany();
};
exports.getAllBeds = getAllBeds;
// 4. Get rooms by ward ID
const getRoomsByWardId = async (wardId) => {
    return await prisma.room.findMany({
        where: { ward_id: wardId },
    });
};
exports.getRoomsByWardId = getRoomsByWardId;
// 5. Get beds by room ID
const getBedsByRoomId = async (roomId) => {
    return await prisma.bed.findMany({
        where: { room_id: roomId },
    });
};
exports.getBedsByRoomId = getBedsByRoomId;
// Get a bed by its ID
const getBedById = async (bedId) => {
    return await prisma.bed.findUnique({
        where: { bed_id: bedId },
    });
};
exports.getBedById = getBedById;
// Mark a bed as Occupied
const occupyBed = async (bedId) => {
    return await prisma.bed.update({
        where: { bed_id: bedId },
        data: {
            occupied_status: "Occupied",
        },
    });
};
exports.occupyBed = occupyBed;
// Mark a bed as Vacant
const vacateBed = async (bedId) => {
    return await prisma.bed.update({
        where: { bed_id: bedId },
        data: {
            occupied_status: "Vacant",
        },
    });
};
exports.vacateBed = vacateBed;
