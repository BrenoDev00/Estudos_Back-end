import { prisma } from "./config/prisma";

// o $transaction é usado para realizar transações no prisma
export async function inserirDadosTransaction() {
  await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`
            INSERT INTO movie (id, title, release_date, movie_detail_id, director_id)
            VALUES ('123456789', 'Teste final transaction', '2025-07-30T20:47:13.736Z', '07ef303e-da14-4f4f-95db-72742df32319', '123')
        `;
  });
}
