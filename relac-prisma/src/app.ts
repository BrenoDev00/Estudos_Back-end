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
    },
  });
}

main()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
