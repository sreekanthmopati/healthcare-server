BEGIN TRY

BEGIN TRAN;

-- Drop default constraint (this is necessary)
ALTER TABLE [dbo].[Patients] DROP CONSTRAINT IF EXISTS DF_Patients_DepartmentName;

-- Now it's safe to drop the column
ALTER TABLE [dbo].[Patients] DROP COLUMN [DepartmentName];

-- Add new column
ALTER TABLE [dbo].[Patients] ADD [DepartmentID] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

