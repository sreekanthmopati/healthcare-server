/*
  Warnings:

  - You are about to alter the column `RecordID` on the `CaseSheets` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(50)` to `Int`.
  - The primary key for the `MedicalRecords` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `RecordID` on the `MedicalRecords` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[CaseSheets] DROP CONSTRAINT [CaseSheets_RecordID_fkey];

-- DropIndex
ALTER TABLE [dbo].[CaseSheets] DROP CONSTRAINT [CaseSheets_RecordID_key];

-- AlterTable
ALTER TABLE [dbo].[CaseSheets] ALTER COLUMN [RecordID] INT NOT NULL;

-- RedefineTables
BEGIN TRANSACTION;
DECLARE @SQL NVARCHAR(MAX) = N''
SELECT @SQL += N'ALTER TABLE '
    + QUOTENAME(OBJECT_SCHEMA_NAME(PARENT_OBJECT_ID))
    + '.'
    + QUOTENAME(OBJECT_NAME(PARENT_OBJECT_ID))
    + ' DROP CONSTRAINT '
    + OBJECT_NAME(OBJECT_ID) + ';'
FROM SYS.OBJECTS
WHERE TYPE_DESC LIKE '%CONSTRAINT'
    AND OBJECT_NAME(PARENT_OBJECT_ID) = 'MedicalRecords'
    AND SCHEMA_NAME(SCHEMA_ID) = 'dbo'
EXEC sp_executesql @SQL
;
CREATE TABLE [dbo].[_prisma_new_MedicalRecords] (
    [RecordID] INT NOT NULL IDENTITY(1,1),
    [PatientID] NVARCHAR(50),
    [DiagnosisDetails] TEXT,
    [TreatmentPlan] TEXT,
    [medication] TEXT,
    [RecordDate] DATE NOT NULL,
    [CreatedAt] DATETIME CONSTRAINT [DF__MedicalRe__Creat__6477ECF3] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedAt] DATETIME CONSTRAINT [DF__MedicalRe__Updat__656C112C] DEFAULT CURRENT_TIMESTAMP,
    [admission_no] INT,
    CONSTRAINT [MedicalRecords_pkey] PRIMARY KEY CLUSTERED ([RecordID])
);
SET IDENTITY_INSERT [dbo].[_prisma_new_MedicalRecords] ON;
IF EXISTS(SELECT * FROM [dbo].[MedicalRecords])
    EXEC('INSERT INTO [dbo].[_prisma_new_MedicalRecords] ([CreatedAt],[DiagnosisDetails],[PatientID],[RecordDate],[RecordID],[TreatmentPlan],[UpdatedAt],[admission_no],[medication]) SELECT [CreatedAt],[DiagnosisDetails],[PatientID],[RecordDate],[RecordID],[TreatmentPlan],[UpdatedAt],[admission_no],[medication] FROM [dbo].[MedicalRecords] WITH (holdlock tablockx)');
SET IDENTITY_INSERT [dbo].[_prisma_new_MedicalRecords] OFF;
DROP TABLE [dbo].[MedicalRecords];
EXEC SP_RENAME N'dbo._prisma_new_MedicalRecords', N'MedicalRecords';
COMMIT;

-- CreateIndex
ALTER TABLE [dbo].[CaseSheets] ADD CONSTRAINT [CaseSheets_RecordID_key] UNIQUE NONCLUSTERED ([RecordID]);

-- AddForeignKey
ALTER TABLE [dbo].[CaseSheets] ADD CONSTRAINT [CaseSheets_RecordID_fkey] FOREIGN KEY ([RecordID]) REFERENCES [dbo].[MedicalRecords]([RecordID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
