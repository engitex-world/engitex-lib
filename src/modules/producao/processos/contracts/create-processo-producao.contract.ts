export type CreateProcessoProducaoFaseRequest = {
  producaoFaseId: number;
  ordem: number;
  obrigatoria?: boolean;
  observacoes?: string;
};

export type CreateProcessoProducaoRequest = {
  nome: string;
  fases: CreateProcessoProducaoFaseRequest[];
};
