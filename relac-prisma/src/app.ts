import { prisma } from "./config/prisma";
import { obterDados, obterComJoin, inserirDados } from "./queries-nativas";

async function main() {
  return await prisma.movie.create({
    data: {
      title: "New Film",
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
              name: "Comédia",
            },
          },
        },
      },
    },
  });
}

async function listData() {
  const result = await prisma.director.findMany();
  // console.log("items", result);
}

main()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
