import { ProdutoFornecedor } from '../types';

export function getProdutoPrecoMaisAlto(fornecedores: ProdutoFornecedor[]): number {
  let highestPrice = 0;

  fornecedores.forEach((fornecedor) => {
    const price = parseFloat(String(fornecedor.preco));

    if (!isNaN(price) && price > highestPrice) {
      highestPrice = price;
    }
  });

  return highestPrice;
}
