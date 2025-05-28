import { PrismaClient } from "../../prisma/orm";

const prisma = new PrismaClient();


// 1. Get all wards
export const getAllWards = async () => {
    return await prisma.ward.findMany();
  };
  
  // 2. Get all rooms
  export const getAllRooms = async () => {
    return await prisma.room.findMany();
  };
  
  // 3. Get all beds
  export const getAllBeds = async () => {
    return await prisma.bed.findMany();
  };
  
  // 4. Get rooms by ward ID
  export const getRoomsByWardId = async (wardId: number) => {
    return await prisma.room.findMany({
      where: { ward_id: wardId },
    });
  };
  
  // 5. Get beds by room ID
  export const getBedsByRoomId = async (roomId: number) => {
    return await prisma.bed.findMany({
      where: { room_id: roomId },
    });
  };

  // Get a bed by its ID
export const getBedById = async (bedId: number) => {
    return await prisma.bed.findUnique({
      where: { bed_id: bedId },
    });
  };
  
  // Mark a bed as Occupied
  export const occupyBed = async (bedId: number) => {
    return await prisma.bed.update({
      where: { bed_id: bedId },
      data: {
        occupied_status: "Occupied",
      },
    });
  };
  
  // Mark a bed as Vacant
  export const vacateBed = async (bedId: number) => {
    return await prisma.bed.update({
      where: { bed_id: bedId },
      data: {
        occupied_status: "Vacant",
      },
    });
  };
  




  // Get available beds count in a ward
  export const getAvailableBedCount = async (wardId: number) => {
    return await prisma.bed.count({
      where: {
        room: { ward_id: wardId },
        occupied_status: "Vacant"
      }
    });
  };