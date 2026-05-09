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

export type RemoverFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdateObservacoesPlaneamentoRequest = {
  observacoesPlaneamento?: string;
};

export type UpdateDatasPrevistasRequest = {
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

export type UpdatePlaneamentoFaseRequest = UpdateObservacoesPlaneamentoRequest &
  UpdateDatasPrevistasRequest;

export type PlaneamentoFaseResponse = PlaneamentoFaseCard;
