/*
  Warnings:

  - You are about to drop the column `admission_no` on the `MedicalRecords` table. All the data in the column will be lost.
  - You are about to drop the column `medication` on the `MedicalRecords` table. All the data in the column will be lost.
  - You are about to drop the `CaseSheets` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[CaseSheets] DROP CONSTRAINT [CaseSheets_RecordID_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[MedicalRecords] DROP CONSTRAINT [MedicalRecords_admission_no_fkey];

-- AlterTable
ALTER TABLE [dbo].[MedicalRecords] DROP COLUMN [admission_no],
[medication];
ALTER TABLE [dbo].[MedicalRecords] ADD [AdmissionNo] INT,
[CaseSheet] NTEXT,
[Medication] TEXT;

-- DropTable
DROP TABLE [dbo].[CaseSheets];

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [MedicalRecords_AdmissionNo_fkey] FOREIGN KEY ([AdmissionNo]) REFERENCES [dbo].[Admissions]([admission_no]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
