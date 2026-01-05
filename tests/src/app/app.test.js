import { somaHorasExtras, calculaSubtracao } from "./app";

test("deve somar 2000 + 500 = 2500", () => {
  expect(somaHorasExtras(2000, 500)).toBe(2500);
});

test("deve subtrair 678 - 10 = 668", () => {
  expect(calculaSubtracao(678, 10)).toBe(668);
});
