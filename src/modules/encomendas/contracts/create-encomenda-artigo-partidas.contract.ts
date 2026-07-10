import { EncomendaArtigoPartidaMotivo } from '../enums';

export type CreateEncomendaArtigoPartidaRequest = {
  numeroPartida?: number;
  quantidade: number;
};

export type CreateEncomendaArtigoPartidasRequest = {
  motivo: EncomendaArtigoPartidaMotivo;
  partidas: CreateEncomendaArtigoPartidaRequest[];
};
