import { ProdutoFornecedor } from '../../../../../engitex-be/src/modules/produtos/domain/entities/produto-fornecedor.entity';

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
