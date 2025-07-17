import { prisma } from "./config/data-base";

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
    console.log("banco desconectado");
  });
