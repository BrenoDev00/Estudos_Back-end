/*
  Warnings:

  - You are about to drop the `street` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."street" DROP CONSTRAINT "street_contact_id_fkey";

-- DropTable
DROP TABLE "public"."street";

-- CreateTable
CREATE TABLE "public"."address" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(64) NOT NULL,
    "zip_code" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_contact_id_key" ON "public"."address"("contact_id");

-- AddForeignKey
ALTER TABLE "public"."address" ADD CONSTRAINT "address_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "public"."contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
