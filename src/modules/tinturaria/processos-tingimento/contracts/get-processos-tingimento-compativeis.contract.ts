import { ArtigoFibra } from '@lib/modules/artigos/enums';

import { ProcessoTingimento } from '../types';

export type GetProcessosTingimentoCompativeisRequest = {
  fibras: ArtigoFibra[];
};

export type GetProcessosTingimentoCompativeisResponse = {
  fibras: ArtigoFibra[];
  processosTingimento: ProcessoTingimento[];
}[];
