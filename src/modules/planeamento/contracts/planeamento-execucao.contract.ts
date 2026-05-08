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
 * Request para adicionar uma observação do operário a uma fase.
 */
export type AdicionarObservacaoOperarioRequest = {
  encomendaArtigoFaseId: number;
  comentario: string;
};

/**
 * Representação de uma fase na fila do operador.
 * Utiliza o mesmo contrato que PlaneamentoFaseCard (observacoesOperario já incluído).
 */
export type OperadorFaseCard = PlaneamentoFaseCard;

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
