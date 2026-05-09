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
 * Representação de uma máquina na vista do planeamento (operador executa a partir disto).
 */
export type PlaneamentoMaquinaFila = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: PlaneamentoFaseCard;
  proximasFases: PlaneamentoFaseCard[];
};

/**
 * Response completa da fila de planeamento.
 */
export type PlaneamentoFilaResponse = {
  grupoMaquina: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaFila[];
};
