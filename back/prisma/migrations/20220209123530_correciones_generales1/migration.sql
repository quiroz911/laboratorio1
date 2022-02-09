-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_enterpriseId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_enterpriseId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "enterpriseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "enterpriseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "Enterprise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
