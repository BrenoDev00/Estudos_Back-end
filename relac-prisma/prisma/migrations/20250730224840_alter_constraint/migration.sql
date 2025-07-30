/*
  Warnings:

  - You are about to drop the column `registration_id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_registration_id_fkey";

-- DropIndex
DROP INDEX "user_registration_id_key";

-- AlterTable
ALTER TABLE "registration" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "registration_id";

-- CreateIndex
CREATE UNIQUE INDEX "registration_user_id_key" ON "registration"("user_id");

-- AddForeignKey
ALTER TABLE "registration" ADD CONSTRAINT "registration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
