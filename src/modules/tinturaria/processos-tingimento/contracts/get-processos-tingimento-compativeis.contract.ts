import { ArtigoFibra } from '@lib/modules/artigos/enums';
import { ProcessoTingimento } from '../types';

export type GetProcessosTingimentoCompativeisContract = {
  fibras: ArtigoFibra[];
};

export type GetProcessosTingimentoCompativeisResponse = {
  fibras: ArtigoFibra[];
  processosTingimento: ProcessoTingimento[];
}[];
