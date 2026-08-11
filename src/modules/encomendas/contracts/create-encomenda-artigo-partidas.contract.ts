import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { EncomendaArtigoPartidaMotivo } from '../enums';
import { Encomenda } from '../types';

export type CreateEncomendaArtigoPartidaRequest = {
  numeroPartida?: number;
  quantidade: number;
};

export type CreateEncomendaArtigoPartidasRequest = {
  motivo: EncomendaArtigoPartidaMotivo;
  partidas: CreateEncomendaArtigoPartidaRequest[];
};

export type CreateEncomendaArtigoPartidasResponse = ServerActionResult<Encomenda, ResponseError>;
