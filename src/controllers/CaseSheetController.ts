// import { Request, Response } from "express";
// import { CaseSheetService } from "../services/CaseSheetService";

// export class CaseSheetController {
//   static async getCaseSheet(req: Request, res: Response) {
//     try {
//       const { patientId } = req.params;
//       const caseSheet = await CaseSheetService.getCaseSheet(String(patientId));

//       if (!caseSheet) {
//         return res.status(404).json({ message: "Case Sheet not found" });
//       }

//       res.json(caseSheet);
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching case sheet", error });
//     }
//   }

//   static async createCaseSheet(req: Request, res: Response) {
//     try {
//       const { patientId } = req.params;
//       const caseSheetData = req.body;
//       const newCaseSheet = await CaseSheetService.createCaseSheet(String(patientId), caseSheetData);

//       res.status(201).json(newCaseSheet);
//     } catch (error) {
//       res.status(500).json({ message: "Error creating case sheet", error });
//     }
//   }

//   static async updateCaseSheet(req: Request, res: Response) {
//     try {
//       const { patientId } = req.params;
//       const caseSheetData = req.body;
//       const updatedCaseSheet = await CaseSheetService.updateCaseSheet(String(patientId), caseSheetData);

//       res.json(updatedCaseSheet);
//     } catch (error) {
//       res.status(500).json({ message: "Error updating case sheet", error });
//     }
//   }

//   static async deleteCaseSheet(req: Request, res: Response) {
//     try {
//       const { patientId } = req.params;
//       await CaseSheetService.deleteCaseSheet(String(patientId));

//       res.json({ message: "Case Sheet deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Error deleting case sheet", error });
//     }
//   }
// }
import { Request, Response } from "express";
import { getAllMedicalRecordsWithDetails } from "../services/CaseSheetService";

export const fetchAllMedicalRecords = async (req: Request, res: Response) => {
  try {
    const records = await getAllMedicalRecordsWithDetails();
    res.json(records);
  } catch (error) {
    console.error("Error fetching medical records:", error);
    res.status(500).json({ message: "Failed to fetch medical records" });
  }
};
