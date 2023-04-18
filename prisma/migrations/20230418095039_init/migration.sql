BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[covers] (
    [id] INT NOT NULL IDENTITY(1,1),
    [registerDate] DATE NOT NULL,
    [historicalNumber] NVARCHAR(1000),
    [totalAmount] FLOAT(53) NOT NULL,
    [iteration] INT NOT NULL,
    [invoiced] BIT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [covers_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [covers_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [covers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [users_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
