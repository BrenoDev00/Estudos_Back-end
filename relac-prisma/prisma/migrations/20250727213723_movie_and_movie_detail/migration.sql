-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "movieDetailId" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieDetail" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MovieDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_movieDetailId_key" ON "Movie"("movieDetailId");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_movieDetailId_fkey" FOREIGN KEY ("movieDetailId") REFERENCES "MovieDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
