export type CreateEncomendaArtigoPartidaRequest = {
  numeroPartida?: number;
  quantidade: number;
};

export type CreateEncomendaArtigoPartidasRequest = {
  partidas: CreateEncomendaArtigoPartidaRequest[];
};
