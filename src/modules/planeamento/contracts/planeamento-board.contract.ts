import { EncomendaArtigoUnidade } from '@lib/modules/encomendas/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado, FaseProntidaoEstado } from '../enums';

// ============================================================================
// TIPOS AUXILIARES AGRUPADOS
// ============================================================================

/**
 * Estrutura de uma observação feita pelo operário durante a execução.
 */
export type ObservacaoOperario = {
  utilizadorNome: string;
  dataHora: string;
  comentario: string;
};

/**
 * Informação da encomenda para exibição no card.
 */
export type PlaneamentoEncomendaInfo = {
  id: number;
  numero: string;
  cliente: string;
  dataEntregaPrevista?: string;
};

/**
 * Informação do artigo para exibição no card.
 */
export type PlaneamentoArtigoInfo = {
  nome: string;
  cor?: string;
  quantidade: number;
  unidade: EncomendaArtigoUnidade;
};

/**
 * Informação da fase para exibição no card.
 */
export type PlaneamentoFaseInfo = {
  nome: string;
  ordem: number;
  grupoMaquina: MaquinaGrupo;
  processoProducao: string;
  estado: FaseExecucaoEstado;
  semaforo: FaseProntidaoEstado;
};

/**
 * Informação de atribuição a máquina (quando planeada).
 */
export type PlaneamentoAtribuicaoInfo = {
  maquinaId: number;
  maquinaNome: string;
  posicaoFila: number;
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

/**
 * Resumo das dependências entre fases.
 */
export type PlaneamentoDependenciasInfo = {
  anterioresTotal: number;
  anterioresConcluidas: number;
};

/**
 * Observações da fase.
 */
export type PlaneamentoObservacoesInfo = {
  planeamento?: string;
  operario?: ObservacaoOperario[];
};

// ============================================================================
// REQUEST/RESPONSE TYPES
// ============================================================================

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
 * Estrutura agrupada para melhor organização e legibilidade.
 */
export type PlaneamentoFaseCard = {
  /** ID da fase do artigo da encomenda */
  id: number;
  /** ID do registo de planeamento (se planeada) */
  planeamentoFaseId?: number;

  /** Informação da encomenda */
  encomenda: PlaneamentoEncomendaInfo;

  /** Informação do artigo */
  artigo: PlaneamentoArtigoInfo;

  /** Informação da fase */
  fase: PlaneamentoFaseInfo;

  /** Informação de atribuição a máquina (quando planeada) */
  atribuicao?: PlaneamentoAtribuicaoInfo;

  /** Resumo das dependências */
  dependencias: PlaneamentoDependenciasInfo;

  /** Observações */
  observacoes?: PlaneamentoObservacoesInfo;
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

/**
 * Informação de uma fase dependente (anterior ou seguinte).
 */
export type FaseDependenciaInfo = {
  id: number;
  nome: string;
  ordem: number;
  estado: FaseExecucaoEstado;
  grupoMaquina: MaquinaGrupo;
};

/**
 * Informação adicional disponível apenas nos detalhes.
 */
export type PlaneamentoDetalheExtra = {
  /** Estado atual da encomenda */
  encomendaEstado: string;
  /** Observações da encomenda */
  encomendaObservacoes?: string;
  /** Observações do artigo */
  artigoObservacoes?: string;
  /** Observações da fase */
  faseObservacoes?: string;
};

/**
 * Informação de execução (quando iniciada/concluída).
 */
export type PlaneamentoExecucaoInfo = {
  dataInicio?: string;
  utilizadorInicio?: string;
  dataFim?: string;
  utilizadorFim?: string;
};

/**
 * Detalhes completos de uma fase de planeamento.
 * Inclui dependências e histórico.
 */
export type PlaneamentoFaseDetalhe = PlaneamentoFaseCard & {
  /** Fases anteriores no processo */
  fasesAnteriores: FaseDependenciaInfo[];
  /** Fases seguintes no processo */
  fasesSeguintes: FaseDependenciaInfo[];
  /** Informação adicional */
  extra: PlaneamentoDetalheExtra;
  /** Informação de execução */
  execucao?: PlaneamentoExecucaoInfo;
};
