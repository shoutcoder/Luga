-- DropForeignKey
ALTER TABLE "FeatureDetail" DROP CONSTRAINT "FeatureDetail_featureId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "FeatureDetail" ADD CONSTRAINT "FeatureDetail_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "ServiceFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
