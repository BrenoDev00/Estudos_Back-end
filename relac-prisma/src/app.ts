import { prisma } from "./config/prisma";

async function main() {
  await prisma.user.delete({
    where: { id: "cfc3bfe0-8460-4b92-9f4e-1191f1424556" },
  });
}

async function listData() {
  const result = await prisma.user.findMany({
    include: { registration: true },
  });
  console.log("items", result);
}

main()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
