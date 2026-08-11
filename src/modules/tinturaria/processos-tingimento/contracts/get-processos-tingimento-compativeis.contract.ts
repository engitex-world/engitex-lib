import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ArtigoFibra } from '@lib/modules/artigos/enums';
import { ProcessoTingimento } from '../types';

export type GetProcessosTingimentoCompativeisRequest = {
  fibras: ArtigoFibra[];
};

export type GetProcessosTingimentoCompativeisResponseItem = {
  fibras: ArtigoFibra[];
  processosTingimento: ProcessoTingimento[];
};

export type GetProcessosTingimentoCompativeisResponse = ServerActionResult<GetProcessosTingimentoCompativeisResponseItem[], ResponseError>;
