import { prisma } from "./config/prisma";

// o query raw é utilizado para realizar queries nativas pelo prisma
export async function obterDados() {
  const dados = await prisma.$queryRaw`SELECT title, release_date FROM movie;`;
  console.log("dados", dados);
}

export async function obterComJoin() {
  const dados = await prisma.$queryRaw`
        SELECT title, release_date, name, duration, description
        FROM movie
        INNER JOIN director
        ON movie.director_id = director.id
        INNER JOIN movie_detail
        ON movie.movie_detail_id = movie_detail.id
    `;

  console.log("dados com join: ", dados);
}

// o execute raw é utilizado para inserir dados nativamente
export async function inserirDados() {
  return await prisma.$executeRaw`
        INSERT INTO movie (id, title, release_date, movie_detail_id, director_id)
        VALUES ('123456', 'Star Wars', '2025-07-30T20:47:13.736Z', '4019dd88-57b6-4f3c-bf98-7909015de572', '123')
    `;
}
