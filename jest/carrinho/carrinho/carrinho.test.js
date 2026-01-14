import Carrinho from "./carrinho";
import Item from "../item/item";

describe("Teste do carrinho", () => {
  it("Deve inicializar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it("Deve ter itens", () => {
    const item1 = new Item("Banana", 4.5, 9);
    const item2 = new Item("Arroz", 20, 3);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(carrinho.itens[0]).toBe(item1);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it("Deve ter a propriedade total", () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty("total");
  });

  it("Deve lançar erro ao finalizar compra com carrinho vazio", () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();

      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError("Carrinho de compras vazio");
  });

  it("Deve permitir adicionar valor de frete", () => {
    const carrinho = new Carrinho();

    carrinho.adicionaFrete(45.78);

    expect(carrinho.frete).toEqual(45.78);
  });

  it("Deve permitir finalizar compra", () => {
    const item1 = new Item("Banana", 20, 2);
    const item2 = new Item("Laranja", 12, 4);

    const carrinho = new Carrinho();

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(23);

    const retornoDeCompraEsperado = {
      subtotal: 88,
      frete: 23,
      total: 111,
    };

    expect(carrinho.finalizaCompra()).toEqual(retornoDeCompraEsperado);
  });
});
