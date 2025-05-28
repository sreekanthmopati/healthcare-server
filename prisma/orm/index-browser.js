
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.AppointmentsScalarFieldEnum = {
  AppointmentID: 'AppointmentID',
  PatientID: 'PatientID',
  DoctorID: 'DoctorID',
  AppointmentDate: 'AppointmentDate',
  Status: 'Status',
  Notes: 'Notes',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.BillsScalarFieldEnum = {
  BillID: 'BillID',
  PatientID: 'PatientID',
  TotalAmount: 'TotalAmount',
  PaymentStatus: 'PaymentStatus',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.DepartmentsScalarFieldEnum = {
  DepartmentID: 'DepartmentID',
  DepartmentName: 'DepartmentName'
};

exports.Prisma.DiagnosesScalarFieldEnum = {
  DiagnosisID: 'DiagnosisID',
  DepartmentID: 'DepartmentID',
  DiagnosisName: 'DiagnosisName',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.DoctorsScalarFieldEnum = {
  DoctorID: 'DoctorID',
  FirstName: 'FirstName',
  LastName: 'LastName',
  DepartmentID: 'DepartmentID',
  ContactNumber: 'ContactNumber',
  Email: 'Email',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.MedicalRecordsScalarFieldEnum = {
  RecordID: 'RecordID',
  PatientID: 'PatientID',
  DiagnosisDetails: 'DiagnosisDetails',
  TreatmentPlan: 'TreatmentPlan',
  medication: 'medication',
  RecordDate: 'RecordDate',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  admission_no: 'admission_no'
};

exports.Prisma.CaseSheetsScalarFieldEnum = {
  CaseSheetID: 'CaseSheetID',
  CaseSheet: 'CaseSheet',
  RecordID: 'RecordID'
};

exports.Prisma.ServicesScalarFieldEnum = {
  ServiceID: 'ServiceID',
  ServiceName: 'ServiceName',
  ServiceCode: 'ServiceCode'
};

exports.Prisma.UsersScalarFieldEnum = {
  UserID: 'UserID',
  Username: 'Username',
  PasswordHash: 'PasswordHash',
  Email: 'Email',
  Role: 'Role',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.PatientsScalarFieldEnum = {
  PatientID: 'PatientID',
  Name: 'Name',
  Age: 'Age',
  Gender: 'Gender',
  ContactNumber: 'ContactNumber',
  Address: 'Address',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  Status: 'Status',
  PatientRegistrationDate: 'PatientRegistrationDate',
  Ptype: 'Ptype',
  DepartmentID: 'DepartmentID',
  Email: 'Email',
  AlternateNumber: 'AlternateNumber',
  DOB: 'DOB',
  BloodGroup: 'BloodGroup'
};

exports.Prisma.WardScalarFieldEnum = {
  ward_id: 'ward_id',
  ward_name: 'ward_name',
  ward_type: 'ward_type',
  nurse_station_number: 'nurse_station_number',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RoomScalarFieldEnum = {
  room_id: 'room_id',
  ward_id: 'ward_id',
  room_number: 'room_number',
  floor_number: 'floor_number',
  total_beds_in_room: 'total_beds_in_room',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BedScalarFieldEnum = {
  bed_id: 'bed_id',
  room_id: 'room_id',
  bed_number: 'bed_number',
  occupied_status: 'occupied_status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AdmissionsScalarFieldEnum = {
  admission_id: 'admission_id',
  admission_no: 'admission_no',
  PatientID: 'PatientID',
  bed_id: 'bed_id',
  diagnosis_id: 'diagnosis_id',
  admission_date: 'admission_date',
  discharge_date: 'discharge_date',
  dischargeReasonId: 'dischargeReasonId',
  treatment_plan: 'treatment_plan',
  remarks: 'remarks'
};

exports.Prisma.DischargeReasonScalarFieldEnum = {
  id: 'id',
  reason: 'reason'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Appointments: 'Appointments',
  Bills: 'Bills',
  Departments: 'Departments',
  Diagnoses: 'Diagnoses',
  Doctors: 'Doctors',
  MedicalRecords: 'MedicalRecords',
  CaseSheets: 'CaseSheets',
  Services: 'Services',
  Users: 'Users',
  Patients: 'Patients',
  Ward: 'Ward',
  Room: 'Room',
  Bed: 'Bed',
  Admissions: 'Admissions',
  DischargeReason: 'DischargeReason'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
