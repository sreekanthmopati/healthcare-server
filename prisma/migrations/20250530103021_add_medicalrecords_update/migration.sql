BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[MedicalRecords] DROP CONSTRAINT [MedicalRecords_admission_no_fkey];

-- AlterTable
EXEC SP_RENAME N'dbo.PK__MedicalR__FBDF78C9D518FC9D', N'MedicalRecords_pkey';
ALTER TABLE [dbo].[MedicalRecords] ALTER COLUMN [PatientID] NVARCHAR(50) NULL;

-- RenameForeignKey
EXEC sp_rename 'dbo.FK__MedicalRe__Patie__6EF57B66', 'MedicalRecords_PatientID_fkey', 'OBJECT';

-- AddForeignKey
ALTER TABLE [dbo].[MedicalRecords] ADD CONSTRAINT [MedicalRecords_admission_no_fkey] FOREIGN KEY ([admission_no]) REFERENCES [dbo].[Admissions]([admission_no]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
