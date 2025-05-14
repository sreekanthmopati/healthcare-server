BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[MedicalRecords] ADD [admission_no] INT;

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [MedicalRecords_admission_no_fkey] FOREIGN KEY ([admission_no]) REFERENCES [dbo].[Admissions]([admission_no]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
