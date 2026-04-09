import { ProcessoTingimentoAmostra } from '../types';

import { PreparacaoTingimento } from '@lib/modules/tinturaria/processos-tingimento/enums';

export type UpdateProcessoTingimentoAmostraRequest = {
  preparacaoTingimento: PreparacaoTingimento;
  processosTingimento: ProcessoTingimentoAmostra[];
};
