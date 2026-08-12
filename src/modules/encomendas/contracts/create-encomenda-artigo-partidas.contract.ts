
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

export type CreateEncomendaArtigoPartidasResponse = Promise<Encomenda>;
