import { prisma } from "./config/prisma";

async function main() {
  await prisma.movie.create({
    data: {
      title: "movie",
      releaseDate: new Date(),
      detail: {
        create: {
          description: "a movie",
          duration: 1200,
        },
      },
      director: {
        create: {
          name: "Director name",
        },
      },
    },
  });
}

async function listData() {
  const result = await prisma.movie.findMany({
    include: { detail: true, director: true },
  });

  console.log("items", result);
}

listData()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
