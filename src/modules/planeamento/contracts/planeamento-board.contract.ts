import { EncomendaArtigoUnidade } from '@lib/modules/encomendas/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado, FaseProntidaoEstado } from '../enums';

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
  semaforo: FaseProntidaoEstado;
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

/**
 * Informação de uma fase dependente (anterior ou seguinte).
 */
export type FaseDependenciaInfo = {
  encomendaArtigoFaseId: number;
  faseNome: string;
  ordem: number;
  estadoFase: FaseExecucaoEstado;
  grupoMaquina: MaquinaGrupo;
};

/**
 * Detalhes completos de uma fase de planeamento.
 * Inclui dependências, comentários e histórico.
 */
export type PlaneamentoFaseDetalhe = PlaneamentoFaseCard & {
  // Dependências
  fasesAnteriores: FaseDependenciaInfo[];
  fasesSeguintes: FaseDependenciaInfo[];

  // Comentários de execução
  comentarios: {
    id: number;
    utilizadorNome: string;
    comentario: string;
    dataHora: string;
  }[];

  // Informação adicional da encomenda
  encomendaEstado: string;
  encomendaObservacoes?: string;
  artigoObservacoes?: string;
  faseObservacoes?: string;

  // Datas de execução (se iniciada/concluída)
  dataInicioReal?: string;
  utilizadorInicio?: string;
  dataFimReal?: string;
  utilizadorFim?: string;
};
