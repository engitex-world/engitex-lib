import { PlaneamentoFaseCard } from './planeamento-board.contract';

/**
 * Request para atribuir uma fase a uma máquina.
 */
export type AtribuirFaseMaquinaRequest = {
  encomendaArtigoFaseId: number;
  maquinaId: number;
};

/**
 * Request para mover uma fase entre máquinas ou dentro da mesma máquina.
 */
export type MoverFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
  maquinaOrigemId: number;
  maquinaDestinoId: number;
  posicaoDestino?: number;
};

/**
 * Request para remover uma fase do planeamento (volta a "Por planear").
 */
export type RemoverFasePlaneamentoRequest = {
  encomendaArtigoFaseId: number;
};

/**
 * Request para atualizar observações do planeamento numa fase.
 */
export type UpdateObservacoesPlaneamentoRequest = {
  observacoesPlaneamento?: string;
};

/**
 * Request para atualizar datas previstas de uma fase.
 */
export type UpdateDatasPrevistasRequest = {
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

/**
 * Request genérica de atualização de uma fase de planeamento.
 */
export type UpdatePlaneamentoFaseRequest = UpdateObservacoesPlaneamentoRequest &
  UpdateDatasPrevistasRequest;

/**
 * Response após operações de planeamento.
 */
export type PlaneamentoFaseResponse = PlaneamentoFaseCard;
