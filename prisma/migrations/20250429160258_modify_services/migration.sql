/*
  Warnings:

  - You are about to drop the column `serviceSectionId` on the `ServiceFeature` table. All the data in the column will be lost.
  - You are about to drop the `ServiceSection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceId` to the `ServiceFeature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceFeature" DROP CONSTRAINT "ServiceFeature_serviceSectionId_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "bgImage" TEXT,
ADD COLUMN     "desc" TEXT,
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "ServiceFeature" DROP COLUMN "serviceSectionId",
ADD COLUMN     "serviceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ServiceSection";

-- AddForeignKey
ALTER TABLE "ServiceFeature" ADD CONSTRAINT "ServiceFeature_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
