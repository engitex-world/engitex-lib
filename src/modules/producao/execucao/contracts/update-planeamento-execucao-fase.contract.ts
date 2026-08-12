import { PlaneamentoFaseCard } from '../../planeamento/contracts';

export type UpdatePlaneamentoExecucaoFaseRequest = {
  encomendaArtigoFaseId: number;
  acao: UpdatePlaneamentoExecucaoFaseAcao;
  observacao?: string;
};

export type UpdatePlaneamentoExecucaoFaseAcao = 'INICIAR' | 'TERMINAR' | 'ADICIONAR_OBSERVACAO';

export type UpdatePlaneamentoExecucaoFaseResponse = PlaneamentoFaseCard;
