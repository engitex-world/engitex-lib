import { LookupOption } from '@lib/common/types';
import { Certificacao, ProdutoSubTipo, ProdutoTipo } from '@lib/modules/produtos/enums';

export type LookupProdutosRequest = {
  tipos: ProdutoTipo[];
  subTipos?: ProdutoSubTipo[];
};

type ProdutoLookup = LookupOption<{
  codigo: string;
  rgb?: string;
  tipo: ProdutoTipo;
  certificacoes: Certificacao[];
}>;

export type LookupProdutosResponse = ProdutoLookup[];
