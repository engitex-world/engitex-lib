import { ProdutoSubTipo, ProdutoTipo } from '@lib/modules/produtos/enums';

import { Produto } from '../types';

export type LookupProdutosRequest = {
  tipos: ProdutoTipo[];
  subTipos?: ProdutoSubTipo[];
};

export type LookupProdutosResponse = Produto[];
