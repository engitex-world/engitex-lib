import { Paginated } from '@lib/common/types';

import { ManutencaoEstado } from '../enums';
import { ManutencaoIntervencao } from '../types/manutencao.type';

export type GetIntervencoesManutencaoRequest = {
  maquinaId?: number;
  tecnicoId?: number;
  estado?: ManutencaoEstado;
};

export type GetIntervencoesManutencaoResponse = Promise<Paginated<ManutencaoIntervencao>>;
