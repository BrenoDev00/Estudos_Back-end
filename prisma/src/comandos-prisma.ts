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
