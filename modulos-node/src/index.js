import { readFile, writeFile } from "node:fs";
import { trataErro } from "./trata-erro.js";
import { quebraEmParagrafos } from "./formatadores-de-texto.js";

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);

  try {
    writeFile(arquivoNovo, textoPalavras, () => {});

    console.log("Arquivo criado com sucesso!");
  } catch (error) {
    trataErro(error);
  }
}

readFile("arquivos/texto-web.txt", "utf-8", (error, data) => {
  try {
    const contagem = quebraEmParagrafos(data);

    const enderecoArquivo = process.argv[2];

    criaESalvaArquivo(contagem, enderecoArquivo);
  } catch {
    trataErro(error);
  }
});
