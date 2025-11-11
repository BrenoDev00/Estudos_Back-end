export function trataErro(erro) {
  if (erro.code === "ENOENT") {
    throw new Error("Arquivo não encontrado.");
  }

  return "Erro na aplicação";
}
