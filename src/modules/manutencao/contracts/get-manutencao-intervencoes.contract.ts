import { ResponseError } from '@lib/common/enums';
import { Paginated, ServerActionResult } from '@lib/common/types';
import { ManutencaoEstado } from '../enums';
import { ManutencaoIntervencao } from '../types/manutencao.type';

export type GetManutencaoIntervencoesRequest = {
  maquinaId?: number;
  estado?: ManutencaoEstado;
};

export type GetManutencaoIntervencoesResponse = ServerActionResult<Paginated<ManutencaoIntervencao>, ResponseError>;
