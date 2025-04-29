-- AlterTable
ALTER TABLE "HeroBanner" ADD COLUMN     "ctaButton" TEXT NOT NULL DEFAULT 'Contact Now',
ADD COLUMN     "ctaLink" TEXT NOT NULL DEFAULT '#';

-- CreateTable
CREATE TABLE "ServiceSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "bgImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceFeature" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "serviceSectionId" TEXT NOT NULL,

    CONSTRAINT "ServiceFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureDetail" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,

    CONSTRAINT "FeatureDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceFeature" ADD CONSTRAINT "ServiceFeature_serviceSectionId_fkey" FOREIGN KEY ("serviceSectionId") REFERENCES "ServiceSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeatureDetail" ADD CONSTRAINT "FeatureDetail_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "ServiceFeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
