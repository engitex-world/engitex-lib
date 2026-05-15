import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type UpdatePlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId?: number;
  posicaoDestino?: number;
  observacoesPlaneamento?: string;
};

export type UpdateFaseObservacoesRequest = {
  observacoesPlaneamento?: string;
};

export type UpdateDatasPrevistasRequest = {
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

export type InactivarFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdatePlaneamentoFaseResponse = PlaneamentoFaseCard;
