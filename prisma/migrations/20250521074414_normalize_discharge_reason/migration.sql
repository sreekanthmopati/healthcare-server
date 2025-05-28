/*
  Warnings:

  - You are about to drop the column `discharge_reason` on the `Admissions` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Admissions] DROP COLUMN [discharge_reason];
ALTER TABLE [dbo].[Admissions] ADD [dischargeReasonId] INT;

-- CreateTable
CREATE TABLE [dbo].[DischargeReason] (
    [id] INT NOT NULL IDENTITY(1,1),
    [reason] VARCHAR(255) NOT NULL,
    CONSTRAINT [DischargeReason_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [DischargeReason_reason_key] UNIQUE NONCLUSTERED ([reason])
);

-- AddForeignKey
ALTER TABLE [dbo].[Admissions] ADD CONSTRAINT [Admissions_dischargeReasonId_fkey] FOREIGN KEY ([dischargeReasonId]) REFERENCES [dbo].[DischargeReason]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
