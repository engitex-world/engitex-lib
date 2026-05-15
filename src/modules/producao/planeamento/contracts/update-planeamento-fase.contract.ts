import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type UpsertPlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId: number;
  posicaoDestino?: number;
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
