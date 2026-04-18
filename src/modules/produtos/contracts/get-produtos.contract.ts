import { Certificacao } from '../enums/certificacao.enum';
import { ProdutoSubTipo, ProdutoTipo } from '../enums/produto.enum';

export type GetProdutosRequest = {
  search?: string;
  certificacoes?: Certificacao[];
  tipo?: ProdutoTipo;
  subTipos?: ProdutoSubTipo[];
};
