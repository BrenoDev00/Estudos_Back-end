/*
  Warnings:

  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_movieDetailId_fkey";

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "MovieDetail";

-- CreateTable
CREATE TABLE "movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "movieDetailId" TEXT NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_detail" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "movie_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_movieDetailId_key" ON "movie"("movieDetailId");

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_movieDetailId_fkey" FOREIGN KEY ("movieDetailId") REFERENCES "movie_detail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
