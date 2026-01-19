import Editora from "./editora.js";

describe("Editora testes unitários", () => {
  const objetoEditora = {
    nome: "CDC",
    cidade: "São Paulo",
    email: "cdc@mail.com",
  };

  it("Deve instanciar uma nova editora", () => {
    const editora = new Editora(objetoEditora);

    expect(editora.nome).toEqual("CDC");
    expect(editora.cidade).toEqual("São Paulo");
    expect(editora.email).toEqual("cdc@mail.com");
  });

  it("Deve listar todas as editoras cadastradas", async () => {
    const editora = new Editora(objetoEditora);
    await editora.salvar();

    expect(await Editora.pegarEditoras()).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          ...objetoEditora,
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      ]),
    );

    expect(await Editora.pegarEditoras()).not.toHaveLength(0);
  });

  it("Deve cadastrar uma nova Editora", async () => {
    const editora = new Editora(objetoEditora);

    const editoraCadastrada = await editora.salvar();

    const editoraBuscada = await Editora.pegarPeloId(editoraCadastrada.id);

    expect(editoraBuscada).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  
});
