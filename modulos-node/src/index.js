import { readFile } from "node:fs";

readFile("arquivos/texto-web.txt", "utf-8", (err, data) => {
  if (err) throw new Error("Erro ao processar arquivo. Tente novamente.");

  quebraEmParagrafos(data);
});

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");

  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);

      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
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
