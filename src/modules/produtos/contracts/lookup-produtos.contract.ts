import { ProdutoSubTipo, ProdutoTipo } from '@lib/modules/produtos/enums';

export type LookupProdutosRequest = {
  tipo: ProdutoTipo[];
  subTipos?: ProdutoSubTipo[];
};
