import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { PlaneamentoFaseCard } from '../../planeamento/contracts/get-planeamento-by-grupo-maquinas.contract';

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
 * Representação de uma máquina no planeamento (operador executa a partir disto).
 */
export type PlaneamentoMaquina = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: PlaneamentoFaseCard;
  proximasFases: PlaneamentoFaseCard[];
};

/**
 * Response completa do planeamento de máquinas.
 */
export type PlaneamentoMaquinaResponse = {
  grupoMaquina: MaquinaGrupo;
  maquinas: PlaneamentoMaquina[];
};
