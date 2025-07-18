import { prisma } from "./config/data-base";

async function main() {
  const users = await prisma.user.findMany();
  const tasks = await prisma.task.findMany();
  console.log(users);
  console.log(tasks);
}

main()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
    console.log("banco desconectado");
  });
