import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ProdutoSubTipo, ProdutoTipo } from '@lib/modules/produtos/enums';

import { Produto } from '../types';

export type LookupProdutosRequest = {
  tipos: ProdutoTipo[];
  subTipos?: ProdutoSubTipo[];
};

export type LookupProdutosResponse = ServerActionResult<Produto[], ResponseError>;
