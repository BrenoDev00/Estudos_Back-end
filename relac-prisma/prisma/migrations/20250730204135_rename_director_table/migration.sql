/*
  Warnings:

  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movie" DROP CONSTRAINT "movie_director_id_fkey";

-- DropTable
DROP TABLE "Director";

-- CreateTable
CREATE TABLE "director" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(55) NOT NULL,

    CONSTRAINT "director_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
