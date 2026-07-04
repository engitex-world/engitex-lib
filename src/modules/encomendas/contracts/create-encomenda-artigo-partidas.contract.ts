export type CreateEncomendaArtigoPartidaRequest = {
  numeroPartida?: number;
  quantidade: number;
};

export type SplitEncomendaArtigoPartidasRequest = {
  partidas: CreateEncomendaArtigoPartidaRequest[];
};
