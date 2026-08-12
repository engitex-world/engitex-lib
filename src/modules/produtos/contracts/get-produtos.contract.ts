import { Paginated } from '@lib/common/types';

import { Certificacao } from '../enums/certificacao.enum';
import { ProdutoSubTipo, ProdutoTipo } from '../enums/produto.enum';
import { Produto, ProdutoAlertas } from '../types';

export type GetProdutosRequest = {
  search?: string;
  certificacoes?: Certificacao[];
  tipo?: ProdutoTipo;
  subTipos?: ProdutoSubTipo[];
};

export type ProdutoWithAlertas = Produto & { alertas: ProdutoAlertas };

export type GetProdutosResponse = Paginated<ProdutoWithAlertas>;
