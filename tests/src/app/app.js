export const somaHorasExtras = (salario, valorHorasExtras) => {
  const total = salario + valorHorasExtras;

  return total;
};

export const calculaSubtracao = (numero1, numero2) => {
  if (numero1 < numero2)
    throw new Error("O primeiro número precisa ser maior que o segundo.");

  const result = numero1 - numero2;

  return result;
};
