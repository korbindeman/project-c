-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "password" DROP DEFAULT,
ALTER COLUMN "salt" DROP DEFAULT;
