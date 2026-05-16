export type UpdatePlaneamentoExecucaoFaseRequest = {
  encomendaArtigoFaseId: number;
  acao: UpdatePlaneamentoExecucaoFaseAcao;
  observacao?: string;
};

export type UpdatePlaneamentoExecucaoFaseAcao = 'INICIAR' | 'TERMINAR' | 'ADICIONAR_OBSERVACAO';
