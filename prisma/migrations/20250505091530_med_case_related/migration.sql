/*
  Warnings:

  - A unique constraint covering the columns `[RecordID]` on the table `CaseSheets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RecordID` to the `CaseSheets` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[CaseSheets] ADD [RecordID] NVARCHAR(50) NOT NULL;

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
