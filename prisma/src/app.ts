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

async function criaDado() {
  const productId = await prisma.product.createManyAndReturn({
    select: { id: true },
    data: [
      {
        name: "new product",
        priceInCents: 34343,
        available: false,
      },
    ],
  });

  console.log("id retornado", productId);
}

criaDado();
