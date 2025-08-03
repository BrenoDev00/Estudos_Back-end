/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Contact";

-- CreateTable
CREATE TABLE "public"."contact" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);
