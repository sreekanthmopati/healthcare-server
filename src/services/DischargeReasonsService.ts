import { PrismaClient } from "../../prisma/orm";

const prisma = new PrismaClient();

// Get all discharge reasons
export const getAllDischargeReasons = async () => {
  return await prisma.dischargeReason.findMany();
};
