import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { EncomendaDevolucaoMotivo } from '../enums';
import { Encomenda } from '../types';

import { CreateEncomendaArtigoRequest, CreateEncomendaRequest } from './create-encomenda.contract';

export type CreateEncomendaDevolucaoRequest = CreateEncomendaRequest & {
  isDevolucao: boolean;
  devolucaoMotivo: EncomendaDevolucaoMotivo;
  artigos: CreateEncomendaDevolucaoArtigoRequest[];
};

export type CreateEncomendaDevolucaoArtigoRequest = CreateEncomendaArtigoRequest & {
  devolucaoEncomendaArtigoId: number;
};

export type CreateEncomendaDevolucaoResponse = ServerActionResult<Encomenda, ResponseError>;
