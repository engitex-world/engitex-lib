import { PlaneamentoFaseCard } from './planeamento-board.contract';

export type AtribuirFaseMaquinaRequest = {
  encomendaArtigoFaseId: number;
  maquinaId: number;
};

export type MoverFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
  maquinaOrigemId: number;
  maquinaDestinoId: number;
  posicaoDestino?: number;
};

export type InactivarFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdateFaseObservacoesRequest = {
  observacoesPlaneamento?: string;
};

export type UpdateDatasPrevistasRequest = {
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

export type UpdatePlaneamentoFaseRequest = UpdateFaseObservacoesRequest &
  UpdateDatasPrevistasRequest;

export type PlaneamentoFaseResponse = PlaneamentoFaseCard;
