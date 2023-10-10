/*
  Warnings:

  - Added the required column `slug` to the `Ogsm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Ogsm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Strategy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ogsm" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Strategy" ADD COLUMN     "content" TEXT NOT NULL;
