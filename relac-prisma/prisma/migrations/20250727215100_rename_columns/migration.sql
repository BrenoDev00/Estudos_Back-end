/*
  Warnings:

  - You are about to drop the column `movieDetailId` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movie_detail_id]` on the table `movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movie_detail_id` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movie" DROP CONSTRAINT "movie_movieDetailId_fkey";

-- DropIndex
DROP INDEX "movie_movieDetailId_key";

-- AlterTable
ALTER TABLE "movie" DROP COLUMN "movieDetailId",
DROP COLUMN "releaseDate",
ADD COLUMN     "movie_detail_id" TEXT NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "movie_movie_detail_id_key" ON "movie"("movie_detail_id");

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_movie_detail_id_fkey" FOREIGN KEY ("movie_detail_id") REFERENCES "movie_detail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
