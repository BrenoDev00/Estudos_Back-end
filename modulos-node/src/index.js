import { readFile } from "node:fs";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

readFile("arquivos/texto-web.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
