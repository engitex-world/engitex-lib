import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { EnsaioAmostra } from '../../types';

export type CustoEnsaiosAmostra = EnsaioAmostra & {
  custo: number;
  produtosSemPreco: string[];
};

export type GetCustoEnsaiosAmostraResponse = ServerActionResult<
  CustoEnsaiosAmostra[],
  ResponseError
>;
