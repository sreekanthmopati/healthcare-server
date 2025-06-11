/*
  Warnings:

  - A unique constraint covering the columns `[UMR]` on the table `Patients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UMR` to the `Patients` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Patients] ADD [UMR] VARCHAR(12) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[Patients] ADD CONSTRAINT [Patients_UMR_key] UNIQUE NONCLUSTERED ([UMR]);

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [MedicalRecords_admission_no_fkey] FOREIGN KEY ([admission_no]) REFERENCES [dbo].[Admissions]([admission_no]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [MedicalRecords_PatientID_fkey] FOREIGN KEY ([PatientID]) REFERENCES [dbo].[Patients]([PatientID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
