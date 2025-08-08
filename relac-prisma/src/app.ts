import { prisma } from "./config/prisma";

async function main() {
  const result = await prisma.movie.create({
    data: {
      title: "Coringa",
      detail: {
        create: {
          duration: 5060,
          description: "sdfsdhfksd sdf",
        },
      },
      director: {
        create: {
          name: "Lorem Ipsum",
        },
      },
      CategoriesOnMovies: {
        create: {
          category: {
            create: {
              name: "Drama",
            },
          },
        },
      },
    },
  });

  console.log("result", result);
}

async function listData() {
  const result = await prisma.category.findMany();
  console.log("items", result);
}

listData()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
