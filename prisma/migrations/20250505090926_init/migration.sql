BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Appointments] (
    [AppointmentID] INT NOT NULL IDENTITY(1,1),
    [PatientID] NVARCHAR(50) NOT NULL,
    [DoctorID] INT NOT NULL,
    [AppointmentDate] DATETIME NOT NULL,
    [Status] VARCHAR(20) CONSTRAINT [DF__Appointme__Statu__5CD6CB2B] DEFAULT 'Scheduled',
    [Notes] TEXT,
    [CreatedAt] DATETIME CONSTRAINT [DF__Appointme__Creat__5DCAEF64] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__Appointme__Updat__5EBF139D] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Appointm__8ECDFCA2F9FCAAF5] PRIMARY KEY CLUSTERED ([AppointmentID])
);

-- CreateTable
CREATE TABLE [dbo].[Bills] (
    [BillID] INT NOT NULL IDENTITY(1,1),
    [PatientID] NVARCHAR(50) NOT NULL,
    [TotalAmount] DECIMAL(10,2) NOT NULL,
    [PaymentStatus] VARCHAR(20) CONSTRAINT [DF__Bills__PaymentSt__5FB337D6] DEFAULT 'Unpaid',
    [CreatedAt] DATETIME CONSTRAINT [DF__Bills__CreatedAt__60A75C0F] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Bills__11F2FC4A26551B6A] PRIMARY KEY CLUSTERED ([BillID])
);

-- CreateTable
CREATE TABLE [dbo].[Departments] (
    [DepartmentID] INT NOT NULL IDENTITY(1,1),
    [DepartmentName] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Departme__B2079BCD930C2737] PRIMARY KEY CLUSTERED ([DepartmentID]),
    CONSTRAINT [UQ__Departme__D949CC3474BFA9FE] UNIQUE NONCLUSTERED ([DepartmentName])
);

-- CreateTable
CREATE TABLE [dbo].[Diagnoses] (
    [DiagnosisID] INT NOT NULL IDENTITY(1,1),
    [DepartmentID] INT NOT NULL,
    [DiagnosisName] NVARCHAR(255) NOT NULL,
    [CreatedAt] DATETIME CONSTRAINT [DF__Diagnoses__Creat__619B8048] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Diagnose__0C54CB935013AA50] PRIMARY KEY CLUSTERED ([DiagnosisID])
);

-- CreateTable
CREATE TABLE [dbo].[Doctors] (
    [DoctorID] INT NOT NULL IDENTITY(1,1),
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [DepartmentID] INT NOT NULL,
    [ContactNumber] VARCHAR(15),
    [Email] NVARCHAR(100),
    [CreatedAt] DATETIME CONSTRAINT [DF__Doctors__Created__628FA481] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__Doctors__Updated__6383C8BA] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Doctors__2DC00EDF0B6E22C5] PRIMARY KEY CLUSTERED ([DoctorID])
);

-- CreateTable
CREATE TABLE [dbo].[MedicalRecords] (
    [RecordID] NVARCHAR(50) NOT NULL,
    [PatientID] NVARCHAR(50) NOT NULL,
    [DiagnosisDetails] TEXT,
    [TreatmentPlan] TEXT,
    [medication] TEXT,
    [RecordDate] DATE NOT NULL,
    [CreatedAt] DATETIME CONSTRAINT [DF__MedicalRe__Creat__6477ECF3] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__MedicalRe__Updat__656C112C] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__MedicalR__FBDF78C9D518FC9D] PRIMARY KEY CLUSTERED ([RecordID])
);

-- CreateTable
CREATE TABLE [dbo].[Services] (
    [ServiceID] INT NOT NULL IDENTITY(1,1),
    [ServiceName] NVARCHAR(100) NOT NULL,
    [ServiceCode] NVARCHAR(50) NOT NULL,
    CONSTRAINT [PK__Services__C51BB0EAF30CB724] PRIMARY KEY CLUSTERED ([ServiceID]),
    CONSTRAINT [UQ__Services__A01D74C9EB0A6743] UNIQUE NONCLUSTERED ([ServiceCode])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [UserID] INT NOT NULL IDENTITY(1,1),
    [Username] VARCHAR(50) NOT NULL,
    [PasswordHash] VARCHAR(255) NOT NULL,
    [Email] VARCHAR(100) NOT NULL,
    [Role] VARCHAR(10),
    [CreatedAt] DATETIME CONSTRAINT [DF__Users__CreatedAt__68487DD7] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__Users__UpdatedAt__693CA210] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Users__1788CCAC2612F0E6] PRIMARY KEY CLUSTERED ([UserID]),
    CONSTRAINT [UQ__Users__536C85E4F08A2506] UNIQUE NONCLUSTERED ([Username]),
    CONSTRAINT [UQ__Users__A9D1053459C51B66] UNIQUE NONCLUSTERED ([Email])
);

-- CreateTable
CREATE TABLE [dbo].[CaseSheets] (
    [CaseSheetID] NVARCHAR(50) NOT NULL,
    [CaseSheet] NTEXT,
    [PatientID] NVARCHAR(50) NOT NULL,
    CONSTRAINT [CaseSheets_pkey] PRIMARY KEY CLUSTERED ([CaseSheetID])
);

-- CreateTable
CREATE TABLE [dbo].[Patients] (
    [PatientID] NVARCHAR(50) NOT NULL,
    [Name] NVARCHAR(50) NOT NULL,
    [Age] NVARCHAR(50) NOT NULL,
    [Gender] VARCHAR(10) NOT NULL,
    [ContactNumber] VARCHAR(15),
    [Address] NVARCHAR(255),
    [CreatedAt] DATETIME CONSTRAINT [DF__Patients__Create__66603565] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__Patients__Update__6754599E] DEFAULT CURRENT_TIMESTAMP,
    [DepartmentName] NVARCHAR(50) CONSTRAINT [DF_Patients_DepartmentName] DEFAULT 'N''General Medicine''',
    [Status] NVARCHAR(10) CONSTRAINT [DF_Patients_Status] DEFAULT 'N''True''',
    [PatientRegistrationDate] DATETIME NOT NULL,
    [Ptype] VARCHAR(50),
    [Email] VARCHAR(100),
    [AlternateNumber] VARCHAR(15),
    [DOB] DATETIME,
    [BloodGroup] VARCHAR(10),
    CONSTRAINT [PK__Patients__970EC346E85DA0C6] PRIMARY KEY CLUSTERED ([PatientID])
);

-- CreateTable
CREATE TABLE [dbo].[Ward] (
    [ward_id] INT NOT NULL IDENTITY(1,1),
    [ward_name] NVARCHAR(1000) NOT NULL,
    [ward_type] NVARCHAR(1000) NOT NULL,
    [nurse_station_number] NVARCHAR(1000),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Ward_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL CONSTRAINT [Ward_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Ward_pkey] PRIMARY KEY CLUSTERED ([ward_id])
);

-- CreateTable
CREATE TABLE [dbo].[Room] (
    [room_id] INT NOT NULL IDENTITY(1,1),
    [ward_id] INT NOT NULL,
    [room_number] NVARCHAR(1000) NOT NULL,
    [floor_number] INT NOT NULL,
    [total_beds_in_room] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Room_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL CONSTRAINT [Room_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Room_pkey] PRIMARY KEY CLUSTERED ([room_id])
);

-- CreateTable
CREATE TABLE [dbo].[Bed] (
    [bed_id] INT NOT NULL IDENTITY(1,1),
    [room_id] INT NOT NULL,
    [bed_number] NVARCHAR(1000) NOT NULL,
    [occupied_status] NVARCHAR(1000) NOT NULL CONSTRAINT [Bed_occupied_status_df] DEFAULT 'Vacant',
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Bed_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL CONSTRAINT [Bed_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Bed_pkey] PRIMARY KEY CLUSTERED ([bed_id])
);

-- CreateTable
CREATE TABLE [dbo].[Admissions] (
    [admission_id] INT NOT NULL IDENTITY(1,1),
    [admission_no] INT NOT NULL,
    [category] NVARCHAR(1000) NOT NULL,
    [PatientID] NVARCHAR(50) NOT NULL,
    [bed_id] INT NOT NULL,
    [diagnosis_id] INT NOT NULL,
    [admission_date] DATETIME2 NOT NULL,
    [discharge_date] DATETIME2,
    [discharge_reason] VARCHAR(255),
    [treatment_plan] VARCHAR(255),
    [remarks] VARCHAR(255),
    CONSTRAINT [Admissions_pkey] PRIMARY KEY CLUSTERED ([admission_id]),
    CONSTRAINT [Admissions_admission_no_key] UNIQUE NONCLUSTERED ([admission_no])
);

-- AddForeignKey
ALTER TABLE [dbo].[Appointments] ADD CONSTRAINT [FK__Appointme__Docto__6B24EA82] FOREIGN KEY ([DoctorID]) REFERENCES [dbo].[Doctors]([DoctorID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Appointments] ADD CONSTRAINT [FK__Appointme__Patie__6A30C649] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Bills] ADD CONSTRAINT [FK__Bills__PatientID__6C190EBB] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Diagnoses] ADD CONSTRAINT [FK__Diagnoses__Depar__6D0D32F4] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Departments]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Doctors] ADD CONSTRAINT [FK__Doctors__Departm__6E01572D] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Departments]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [FK__MedicalRe__Patie__6EF57B66] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CaseSheets] ADD CONSTRAINT [FK_CaseSheet_Patients] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Room] ADD CONSTRAINT [Room_ward_id_fkey] FOREIGN KEY ([ward_id]) REFERENCES [dbo].[Ward]([ward_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Bed] ADD CONSTRAINT [Bed_room_id_fkey] FOREIGN KEY ([room_id]) REFERENCES [dbo].[Room]([room_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Admissions] ADD CONSTRAINT [Admissions_PatientID_fkey] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Admissions] ADD CONSTRAINT [Admissions_bed_id_fkey] FOREIGN KEY ([bed_id]) REFERENCES [dbo].[Bed]([bed_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Admissions] ADD CONSTRAINT [Admissions_diagnosis_id_fkey] FOREIGN KEY ([diagnosis_id]) REFERENCES [dbo].[Diagnoses]([DiagnosisID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
