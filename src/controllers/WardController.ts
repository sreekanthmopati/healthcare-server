import { Request, Response, NextFunction } from "express";

import {
  getAllWards,
  getAllRooms,
  getAllBeds,
  getRoomsByWardId,
  getBedsByRoomId,
  getBedById,
  vacateBed,
  occupyBed
} from "../services/WardService";

// 1. Get all wards
export const fetchAllWards = async (req: Request, res: Response) => {
  try {
    const wards = await getAllWards();
    res.json(wards);
  } catch (error) {
    console.error("Error fetching wards:", error);
    res.status(500).json({ message: "Failed to fetch wards" });
  }
};

// 2. Get all rooms
export const fetchAllRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await getAllRooms();
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
};

// 3. Get all beds
export const fetchAllBeds = async (req: Request, res: Response) => {
  try {
    const beds = await getAllBeds();
    res.json(beds);
  } catch (error) {
    console.error("Error fetching beds:", error);
    res.status(500).json({ message: "Failed to fetch beds" });
  }
};

// 4. Get rooms by ward ID
export const fetchRoomsByWardId = async (req: Request, res: Response) => {
  try {
    const wardId = parseInt(req.params.wardId);
    const rooms = await getRoomsByWardId(wardId);
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms by ward ID:", error);
    res.status(500).json({ message: "Failed to fetch rooms for ward" });
  }
};

// 5. Get beds by room ID
export const fetchBedsByRoomId = async (req: Request, res: Response) => {
  try {
    const roomId = parseInt(req.params.roomId);
    const beds = await getBedsByRoomId(roomId);
    res.json(beds);
  } catch (error) {
    console.error("Error fetching beds by room ID:", error);
    res.status(500).json({ message: "Failed to fetch beds for room" });
  }
};


// export const updateBedToOccupied = async (req: Request, res: Response) => {
//     try {
//       const bedId = parseInt(req.params.bedId);
//       if (isNaN(bedId)) {
//         return res.status(400).json({ success: false, message: "Invalid bed ID" });
//       }
  
//       // Log the incoming bedId for debugging
//       console.log("Bed ID from request:", bedId);
  
//       // Fetch bed by ID
//       const bed = await getBedById(bedId);
//       if (!bed) {
//         return res.status(404).json({ success: false, message: "Bed not found" });
//       }
  
//       console.log("Fetched bed:", bed); // Log bed details
  
//       if (bed.occupied_status === "Occupied") {
//         return res.status(200).json({
//           success: true,
//           message: "Bed is already occupied",
//           data: bed
//         });
//       }
  
//       // Update bed status to "Occupied"
//       const updatedBed = await occupyBed(bedId);
//       console.log("Updated bed status:", updatedBed); // Log the updated bed status
  
//       return res.status(200).json({
//         success: true,
//         message: "Bed occupied successfully",
//         data: updatedBed
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error"
//       });
//     }
//   };
  
  
//   export const updateBedToVacant = async (req: Request, res: Response) => {
//     try {
//       const bedId = parseInt(req.params.bedId);
//       if (isNaN(bedId)) {
//         return res.status(400).json({ success: false, message: "Invalid bed ID" });
//       }
  
//       const bed = await getBedById(bedId);
//       if (!bed) {
//         return res.status(404).json({ success: false, message: "Bed not found" });
//       }
  
//       if (bed.occupied_status === "Vacant") {
//         return res.status(200).json({
//           success: true,
//           message: "Bed is already vacant",
//           data: bed
//         });
//       }
  
//       const updatedBed = await vacateBed(bedId);
//       return res.status(200).json({
//         success: true,
//         message: "Bed vacated successfully",
//         data: updatedBed
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error"
//       });
//     }
//   };


type BedStatusRequest = Request<{ bedId: string }, any, any, any>;

export const updateBedToOccupied = async (
  req: BedStatusRequest,
  res: Response,
  next: NextFunction  // Add next parameter to match Express types
): Promise<void> => {  // Explicitly return Promise<void>
  try {
    const bedId = parseInt(req.params.bedId);
    if (isNaN(bedId)) {
      res.status(400).json({ success: false, message: "Invalid bed ID" });
      return;  // Use return without value
    }

    const bed = await getBedById(bedId);
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

    const updatedBed = await occupyBed(bedId);
    res.status(200).json({ 
      success: true, 
      message: "Bed occupied successfully",
      data: updatedBed 
    });
  } catch (error) {
    next(error);  // Pass errors to Express's error handler
  }
};

// Do the same for updateBedToVacant
export const updateBedToVacant = async (
  req: BedStatusRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const bedId = parseInt(req.params.bedId);
    if (isNaN(bedId)) {
      res.status(400).json({ success: false, message: "Invalid bed ID" });
      return;
    }

    const bed = await getBedById(bedId);
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

    const updatedBed = await vacateBed(bedId);
    res.status(200).json({ 
      success: true, 
      message: "Bed vacated successfully",
      data: updatedBed 
    });
  } catch (error) {
    next(error);
  }
};
















