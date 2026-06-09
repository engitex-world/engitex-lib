import { Paginated } from '@lib/common/types';

import { ProcessoProducao } from '../types';

export type GetProcessosProducaoRequest = {
  pesquisa?: string;
};

export type GetProcessosProducaoResponse = Promise<Paginated<ProcessoProducao>>;
