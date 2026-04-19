import { ProdutoSubTipo, ProdutoTipo } from '@lib/modules/produtos/enums';

export type LookupProdutosRequest = {
  tipos: ProdutoTipo[];
  subTipos?: ProdutoSubTipo[];
};
