import { prisma } from "../src/config/prisma";

async function seed() {
  await prisma.contact.upsert({
    where: {
      id: "852cdfe4-24e0-4b78-a547-5c8176e3add5",
    },
    create: {
      name: "Policia Militar",
      phone: {
        create: [{ title: "Principal", number: "190" }],
      },
      address: {
        create: {
          street: "Rual tal",
          zipCode: "4545-90",
          number: 34,
        },
      },
    },
    update: {},
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
