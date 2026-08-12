import { ArtigoFibra } from '@lib/modules/artigos/enums';

import { ProcessoTingimento } from '../types';

export type GetProcessosTingimentoCompativeisRequest = {
  fibras: ArtigoFibra[];
};

export type GetProcessosTingimentoCompativeisResponseItem = {
  fibras: ArtigoFibra[];
  processosTingimento: ProcessoTingimento[];
};

export type GetProcessosTingimentoCompativeisResponse = Promise<GetProcessosTingimentoCompativeisResponseItem[]>;
