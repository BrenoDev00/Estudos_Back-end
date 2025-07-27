import { prisma } from "./config/data-base";

// Principais comandos do Prisma para consultas

// findMany(): faz select e possui variações.
const ex1 = prisma.user.findMany();

const ex2 = prisma.user.findMany({
  where: {
    name: "user",
    age: 34,
  },
});

// findUnique(): faz select para buscar registro que possui um valor de coluna único, como um id.
const ex3 = prisma.product.findUnique({
  where: {
    id: "sdjfkjksdfkjsdkfdf",
  },
});

// create(): adicionar dados no banco.
const ex4 = prisma.product.create({
  data: {
    name: "tal",
    available: true,
    priceInCents: 343334,
  },
});

// createMany(): adicionar vários registros de uma vez.
const ex5 = prisma.product.createMany({
  data: [
    {
      name: "tal",
      priceInCents: 34343,
      available: true,
    },
    {
      name: "sdfdsf",
      priceInCents: 34343,
      available: false,
    },
  ],
});

// createManyAndReturn(): criar registro(s) e retorna valores ou um valor específico criado.
const ex6 = prisma.product.createManyAndReturn({
  select: { id: true }, //retorna o id após a adição deste registro.
  data: [
    {
      name: "tal",
      priceInCents: 343434,
      available: false,
    },
  ],
});

// update(): atualiza 1 registro.
const ex7 = prisma.product.update({
  where: { id: "sdjfdsjlfds" },
  data: {
    name: "tal",
  },
});

// updateMany(): atualiza múltiplos registros.
const ex8 = prisma.product.updateMany({
  data: {
    available: true,
  },

  // where é opcional no updateMany
  where: {
    id: { in: ["jksdlfjdsfdsjsdkf", "jfldslkfkdskfdsjfkds"] },
  },
});

// delete(): exclui 1 registro.
const ex9 = prisma.product.delete({
  where: {
    id: "jsdfksdjkfjdskf",
  },
});

// deleteMany(): exclui vários registros.
const ex10 = prisma.product.deleteMany({
  where: {
    name: "dsjlfkjdskfkds",
  },
});
