export type CreateControloQualidadeResultadoNormaRequest = {
  cadernoEncargosNormaId: number;
  valorMedido: number;
};

export type CreateControloQualidadeResultadoRequest = {
  encomendaArtigoId: number;
  encomendaArtigoFaseId: number;
  cadernoEncargosId?: number;
  observacoes?: string;
  normas: CreateControloQualidadeResultadoNormaRequest[];
};
