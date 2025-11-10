import { readFile } from "node:fs";

readFile("arquivos/texto-web.txt", "utf-8", (err, data) => {
  if (err) throw new Error("Erro ao processar arquivo. Tente novamente.");

  quebraEmParagrafos(data);
});

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");

  const resultado = {};

  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });

  return resultado;
}

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");

  const resultado = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  });

  console.log(resultado);
}
