import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { PlaneamentoFaseCard } from './planeamento-board.contract';

/**
 * Request para obter a fila de execução do operador.
 */
export type GetFilaOperadorRequest = {
  grupoMaquina: MaquinaGrupo;
  diasFuturos?: number; // Default: 5 dias
};

/**
 * Request para iniciar uma fase de execução.
 */
export type IniciarFaseExecucaoRequest = {
  encomendaArtigoFaseId: number;
};

/**
 * Request para terminar uma fase de execução.
 */
export type TerminarFaseExecucaoRequest = {
  encomendaArtigoFaseId: number;
  comentarioOpcional?: string;
};

/**
 * Request para adicionar um comentário a uma fase.
 */
export type AdicionarComentarioFaseRequest = {
  encomendaArtigoFaseId: number;
  comentario: string;
};

/**
 * Comentário de um operário durante a execução de uma fase.
 */
export type OperadorComentario = {
  utilizadorNome: string;
  dataHora: string; // ISO 8601 format
  comentario: string;
};

/**
 * Representação de uma fase na fila do operador (inclui comentários).
 * O campo observacoesOperario é um array JSON de comentários.
 */
export type OperadorFaseCard = PlaneamentoFaseCard & {
  observacoesOperario?: OperadorComentario[];
};

/**
 * Representação de uma máquina na vista do operador.
 */
export type OperadorMaquinaFila = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: OperadorFaseCard;
  proximasFases: PlaneamentoFaseCard[];
};

/**
 * Response completa da fila do operador.
 */
export type OperadorFilaResponse = {
  grupoMaquina: MaquinaGrupo;
  maquinas: OperadorMaquinaFila[];
};
