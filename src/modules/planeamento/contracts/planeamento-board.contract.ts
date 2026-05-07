import { EncomendaArtigoUnidade } from '@lib/modules/encomendas/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado, ProntidaoEstado } from '../enums';

/**
 * Request para obter o quadro de planeamento filtrado por grupo de máquina.
 */
export type GetPlaneamentoBoardRequest = {
  grupoMaquina?: MaquinaGrupo;
  page?: number;
  pageSize?: number;
};

/**
 * Representação de uma fase no card do Kanban.
 * Inclui todas as informações necessárias para exibição e ações.
 */
export type PlaneamentoFaseCard = {
  encomendaArtigoFaseId: number;
  planeamentoFaseId?: number;

  // Encomenda info
  encomendaId: number;
  encomendaNumero: string;
  clienteNome: string;
  deadlineEncomenda?: string;
  dataPrevistaEntrega?: string;

  // Artigo info
  artigoNome: string;
  corCodigo?: string;
  quantidade: number;
  unidade: EncomendaArtigoUnidade;

  // Fase info
  faseNome: string;
  ordemNoProcesso: number;
  grupoMaquina: MaquinaGrupo;
  processoProducaoNome: string;

  // Estado e planeamento
  estadoFase: FaseExecucaoEstado;
  semaforo: ProntidaoEstado;
  observacoesPlaneador?: string;
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;

  // Máquina atribuída (se planeada)
  maquinaId?: number;
  maquinaNome?: string;
  posicaoFila?: number;

  // Resumo de dependências
  fasesAnterioresTotal: number;
  fasesAnterioresConcluidas: number;
};

/**
 * Representação de uma coluna de máquina no Kanban.
 */
export type PlaneamentoMaquinaColumn = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: PlaneamentoFaseCard;
  fila: PlaneamentoFaseCard[];
};

/**
 * Response completa do quadro de planeamento.
 */
export type PlaneamentoBoardResponse = {
  grupoMaquina: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaColumn[];
  porPlanear: PlaneamentoFaseCard[];
  totalCount: number;
  skip: number;
  take: number;
};
