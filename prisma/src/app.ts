import { prisma } from "./config/data-base";

// async function main() {
//   const products = await prisma.product.findMany({
//     select: {
//       name: true,
//       priceInCents: true,
//     },
//   });

//   console.log(products);
// }

// main()
//   .then()
//   .catch((error) => console.error(error))
//   .finally(async () => {
//     await prisma.$disconnect();
//     console.log("banco desconectado");
//   });

// async function criaDado() {
//   const productId = await prisma.product.createManyAndReturn({
//     select: { id: true },
//     data: [
//       {
//         name: "new product",
//         priceInCents: 34343,
//         available: false,
//       },
//     ],
//   });

//   console.log("id retornado", productId);
// }

async function atualizaRegistro() {
  await prisma.product.updateMany({
    data: {
      available: true,
    },
    where: {
      id: {
        in: [
          "72875add-4dbe-427b-b9cd-b10f59f91bc3",
          "eec0ce06-834f-43f1-8db3-5142035a6500",
        ],
      },
    },
  });
}

atualizaRegistro()
  .then()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
