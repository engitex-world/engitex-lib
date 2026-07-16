import { EncomendaDevolucaoMotivo } from '../enums';

import { CreateEncomendaArtigoRequest, CreateEncomendaRequest } from './create-encomenda.contract';

export type CreateEncomendaDevolucaoRequest = CreateEncomendaRequest & {
  isDevolucao: boolean;
  devolucaoMotivo: EncomendaDevolucaoMotivo;
  artigos: CreateEncomendaDevolucaoArtigoRequest[];
};

export type CreateEncomendaDevolucaoArtigoRequest = CreateEncomendaArtigoRequest & {
  devolucaoEncomendaArtigoId: number;
};
