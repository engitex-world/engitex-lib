import { PlaneamentoFaseCard } from './get-planeamento-by-grupo-maquinas.contract.';

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

/**
 * Request para criar ou atualizar um planeamento de fase.
 * - Se não existe planeamento para a fase → cria novo
 * - Se já existe → atualiza máquina e/ou posição
 */
export type UpsertPlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId: number;
  posicaoDestino?: number;
};

export type UpdatePlaneamentoFaseResponse = PlaneamentoFaseCard;
