import { PreparacaoTingimento } from '@lib/modules/tinturaria/processos-tingimento/enums';

import { ProcessoTingimentoAmostra } from '../types';

export type UpdateProcessoTingimentoAmostraRequest = {
  preparacaoTingimento: PreparacaoTingimento;
  processosTingimento: (Omit<
    ProcessoTingimentoAmostra,
    'processoTingimento' | 'produtos' | 'id'
  > & {
    id?: number;
    processoTingimentoId: number;
  })[];
};
