import { PrismaClient } from "../../prisma/orm"; 
//  import axios from "axios";

const prisma = new PrismaClient();
export default prisma;
//console.log("ps.ts at line 12:");
// Fetch patients with an optional department filter
export const getPatients = async (DepartmentName?: string) => {
  try {
    
    const whereCondition = DepartmentName ? { DepartmentName } : {}; // Filter by department if provided
    console.log("ps.ts at line 12: in ps services.ts", whereCondition);
    const patients = await prisma.patients.findMany({ where: whereCondition });
    return patients;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw new Error("Failed to fetch patients");
  }
};

// export const createPatient = async (patientData: {
//   PatientID: string;
//   Name: string;
//   Age: string;
//   Gender: string;
//   ContactNumber?: string;
//   Address?: string;
//   DepartmentName?: string;
//   Status?: string;
// }) => {
//   try {
//     const newPatient = await prisma.patients.create({
//       data: {
//         PatientID: patientData.PatientID,
//         Name: patientData.Name,
//         Age: patientData.Age,
//         Gender: patientData.Gender,
//         ContactNumber: patientData.ContactNumber,
//         Address: patientData.Address,
//         DepartmentName: patientData.DepartmentName ?? undefined,
//         Status: patientData.Status ?? undefined,
//         // CreatedAt and UpdatedAt are auto-filled by DB defaults
//       },
//     });

//     console.log("✅ New patient created:", newPatient);
//     return newPatient;
//   } catch (error) {
//     console.error("❌ Error creating patient:", error);
//     throw new Error("Failed to create patient");
//   }
// };



export const createPatient = async (patientData: {
  PatientID: string;
  Name: string;
  Age: string;
  Gender: string;
  ContactNumber?: string;
  Address?: string;
  DepartmentName?: string;
  Status?: string;
  PatientRegistrationDate: Date; // Required
  Ptype: string; // Required (Inpatient/Outpatient)
  Email?: string;
  AlternateNumber?: string;
  DOB?: Date;
  BloodGroup?: string;
  
}) => {
  try {
    const newPatient = await prisma.patients.create({
      data: {
        PatientID: patientData.PatientID,
        Name: patientData.Name,
        Age: patientData.Age,
        Gender: patientData.Gender,
        ContactNumber: patientData.ContactNumber,
        Address: patientData.Address,
        DepartmentName: patientData.DepartmentName ?? "General Medicine", // Default to "General Medicine"
        Status: patientData.Status ?? "True", // Default to "True"
        PatientRegistrationDate: patientData.PatientRegistrationDate,
        Ptype: patientData.Ptype,

      
        Email: patientData.Email,
        AlternateNumber: patientData.AlternateNumber,
        DOB: patientData.DOB,
        BloodGroup: patientData.BloodGroup,
        
        // CreatedAt and UpdatedAt are auto-filled by DB defaults
      },
    });

    console.log("✅ New patient created:", newPatient);
    return newPatient;
  } catch (error) {
    console.error("❌ Error creating patient:", error);
    throw new Error("Failed to create patient");
  }
};

// Fetch medical records based on a given field (e.g., PatientID, Diagnosis, etc.)
export const getPatientWithRecords = async (id: string) => {
  console.log("ps.ts at line 23:", id);
  const patient = await prisma.patients.findUnique({
    
    where: { PatientID: id },
  });

  if (!patient) {
    throw new Error("Patient not found");
  }

  const medicalRecords = await prisma.medicalRecords.findMany({
    where: { PatientID: id },
  });
  console.log("ps.ts at line 36:",patient, medicalRecords );
  return { patient, medicalRecords };
};



// Create a new patient
