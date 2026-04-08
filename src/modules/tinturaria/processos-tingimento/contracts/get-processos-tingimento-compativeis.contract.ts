import { ProcessoTingimento } from '../types';

import { ArtigoFibra } from '@lib/modules/artigos/enums';

export type GetProcessosTingimentoCompativeisContract = {
  fibras: ArtigoFibra[];
};

export type GetProcessosTingimentoCompativeisResponse = {
  fibras: ArtigoFibra[];
  processosTingimento: ProcessoTingimento[];
}[];
