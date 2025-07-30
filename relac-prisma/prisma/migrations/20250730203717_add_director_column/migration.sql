/*
  Warnings:

  - Added the required column `director_id` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movie" ADD COLUMN     "director_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Director" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(55) NOT NULL,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
