"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDischargeReasons = void 0;
const orm_1 = require("../../prisma/orm");
const prisma = new orm_1.PrismaClient();
// Get all discharge reasons
const getAllDischargeReasons = async () => {
    return await prisma.dischargeReason.findMany();
};
exports.getAllDischargeReasons = getAllDischargeReasons;
