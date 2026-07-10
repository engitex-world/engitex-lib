import { DevolucaoMotivo } from '../enums';

import { CreateEncomendaArtigoRequest, CreateEncomendaRequest } from './create-encomenda.contract';

export type CreateEncomendaDevolucaoRequest = CreateEncomendaRequest & {
  isDevolucao: boolean;
  devolucaoMotivo: DevolucaoMotivo;
  artigos: CreateEncomendaDevolucaoArtigoRequest[];
};

export type CreateEncomendaDevolucaoArtigoRequest = CreateEncomendaArtigoRequest & {
  devolucaoEncomendaArtigoId: number;
};
