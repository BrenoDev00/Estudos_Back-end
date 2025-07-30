/*
  Warnings:

  - A unique constraint covering the columns `[registration_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registration_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "registration_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "registration" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_registration_id_key" ON "user"("registration_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_registration_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "registration"("id") ON DELETE CASCADE ON UPDATE CASCADE;
