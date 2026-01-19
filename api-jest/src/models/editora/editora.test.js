import Editora from "./editora.js";
import Livro from "../livro.js";

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

  it("Deve permitir editar uma editora cadastrada", async () => {
    const editora = new Editora({ id: 1, ...objetoEditora });

    await editora.salvar();

    const editoraBuscada = await Editora.pegarPeloId(1);

    expect(editoraBuscada).toEqual(
      expect.objectContaining({
        id: 1,
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it("Deve permitir excluir uma editora", async () => {
    const editora = new Editora({ id: 1, ...objetoEditora });

    await editora.salvar();

    await Editora.excluir(1);

    expect(await Editora.pegarPeloId(1)).toEqual(
      expect.not.objectContaining({
        id: 1,
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it("Deve permitir listar livros por editora", async () => {
    const editoraSalva = new Editora({ id: 2, ...objetoEditora });

    const livro = new Livro({
      id: 4,
      titulo: "O Feiticeiro de Terramar",
      paginas: 450,
      editora_id: 2,
      autor_id: 2,
      created_at: "2022-07-01 19:49:06",
      updated_at: "2022-07-01 19:49:06",
    });

    const livroSalvo = await livro.criar();

    const livrosPorEditora = await Editora.pegarLivrosPorEditora(
      editoraSalva.id,
    );

    const livrosEsperados = [livroSalvo];

    expect(livrosPorEditora.livros).toEqual(
      expect.arrayContaining(livrosEsperados),
    );
  });
});
