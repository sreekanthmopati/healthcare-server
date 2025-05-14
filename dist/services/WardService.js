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
exports.vacateBed = exports.occupyBed = exports.getBedById = exports.getBedsByRoomId = exports.getRoomsByWardId = exports.getAllBeds = exports.getAllRooms = exports.getAllWards = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
// 1. Get all wards
const getAllWards = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.ward.findMany();
});
exports.getAllWards = getAllWards;
// 2. Get all rooms
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.room.findMany();
});
exports.getAllRooms = getAllRooms;
// 3. Get all beds
const getAllBeds = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.bed.findMany();
});
exports.getAllBeds = getAllBeds;
// 4. Get rooms by ward ID
const getRoomsByWardId = (wardId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.room.findMany({
        where: { ward_id: wardId },
    });
});
exports.getRoomsByWardId = getRoomsByWardId;
// 5. Get beds by room ID
const getBedsByRoomId = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.bed.findMany({
        where: { room_id: roomId },
    });
});
exports.getBedsByRoomId = getBedsByRoomId;
// Get a bed by its ID
const getBedById = (bedId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.bed.findUnique({
        where: { bed_id: bedId },
    });
});
exports.getBedById = getBedById;
// Mark a bed as Occupied
const occupyBed = (bedId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.bed.update({
        where: { bed_id: bedId },
        data: {
            occupied_status: "Occupied",
        },
    });
});
exports.occupyBed = occupyBed;
// Mark a bed as Vacant
const vacateBed = (bedId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.bed.update({
        where: { bed_id: bedId },
        data: {
            occupied_status: "Vacant",
        },
    });
});
exports.vacateBed = vacateBed;
