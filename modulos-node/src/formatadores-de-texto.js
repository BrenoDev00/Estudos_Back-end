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

export function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");

  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];

    return verificaPalavrasDuplicadas(paragrafo);
  });

  return contagem;
}

function filtraOcorrencias(paragrafo) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

export function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";

  listaPalavras.forEach((paragrafo, index) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", ");

    textoFinal += `palavras duplicadas no paragrafo: ${
      index + 1
    }: ${duplicadas}\n`;
  });

  return textoFinal;
}
