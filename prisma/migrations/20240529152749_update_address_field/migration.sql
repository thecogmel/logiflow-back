/*
  Warnings:

  - You are about to drop the column `bakery_name` on the `Delivery` table. All the data in the column will be lost.
  - Added the required column `address` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "bakery_name",
ADD COLUMN     "address" TEXT NOT NULL;
