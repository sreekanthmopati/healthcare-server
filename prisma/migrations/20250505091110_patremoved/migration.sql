/*
  Warnings:

  - You are about to drop the column `PatientID` on the `CaseSheets` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[CaseSheets] DROP CONSTRAINT [FK_CaseSheet_Patients];

-- AlterTable
ALTER TABLE [dbo].[CaseSheets] DROP COLUMN [PatientID];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
