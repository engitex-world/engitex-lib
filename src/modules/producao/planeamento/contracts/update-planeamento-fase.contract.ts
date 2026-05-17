import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type UpdatePlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId?: number;
  posicaoDestino?: number;
  observacoesPlaneamento?: string;
};

export type RemoverPlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdatePlaneamentoFaseResponse = PlaneamentoFaseCard;
