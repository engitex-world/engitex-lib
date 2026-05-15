import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type UpdatePlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId?: number;
  posicaoDestino?: number;
  observacoesPlaneamento?: string;
};

export type InactivarFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdatePlaneamentoFaseResponse = PlaneamentoFaseCard;
