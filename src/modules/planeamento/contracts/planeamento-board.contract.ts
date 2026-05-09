import { EncomendaArtigoUnidade } from '@lib/modules/encomendas/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado, FaseProntidaoEstado } from '../enums';

export type PlaneamentoEncomendaInfo = {
  id: number;
  numero: string;
  cliente: string;
  dataEntregaPrevista?: string;
};

export type PlaneamentoArtigoInfo = {
  nome: string;
  cor?: string;
  quantidade: number;
  unidade: EncomendaArtigoUnidade;
};

export type PlaneamentoFaseInfo = {
  nome: string;
  ordem: number;
  grupoMaquina: MaquinaGrupo;
  processoProducao: string;
  estado: FaseExecucaoEstado;
  semaforo: FaseProntidaoEstado;
};

export type PlaneamentoAtribuicaoInfo = {
  maquinaId: number;
  maquinaNome: string;
  posicaoFila: number;
  dataPrevistaInicio?: string;
  dataPrevistaFim?: string;
};

export type PlaneamentoDependenciasInfo = {
  anterioresTotal: number;
  anterioresConcluidas: number;
};

export type PlaneamentoObservacoesInfo = {
  planeamento?: string;
  operario?: ObservacaoOperario[];
};

export type ObservacaoOperario = {
  utilizadorNome: string;
  dataHora: string;
  comentario: string;
};

// ============================================================================
// REQUEST/RESPONSE TYPES
// ============================================================================

export type GetPlaneamentoBoardRequest = {
  grupoMaquina?: MaquinaGrupo;
  page?: number;
  pageSize?: number;
};

export type PlaneamentoBoardResponse = {
  grupoMaquina: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaColumn[];
  porPlanear: PlaneamentoFaseCard[];
  totalCount: number;
  skip: number;
  take: number;
};

export type PlaneamentoFaseCard = {
  id: number;
  planeamentoFaseId?: number;
  encomenda: PlaneamentoEncomendaInfo;
  artigo: PlaneamentoArtigoInfo;
  fase: PlaneamentoFaseInfo;
  atribuicao?: PlaneamentoAtribuicaoInfo;
  dependencias: PlaneamentoDependenciasInfo;
  observacoes?: PlaneamentoObservacoesInfo;
};

export type PlaneamentoMaquinaColumn = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: PlaneamentoFaseCard;
  fila: PlaneamentoFaseCard[];
};

export type FaseDependenciaInfo = {
  id: number;
  nome: string;
  ordem: number;
  estado: FaseExecucaoEstado;
  grupoMaquina: MaquinaGrupo;
};

export type PlaneamentoDetalheExtra = {
  encomendaEstado: string;
  encomendaObservacoes?: string;
  artigoObservacoes?: string;
  faseObservacoes?: string;
};

export type PlaneamentoExecucaoInfo = {
  dataInicio?: string;
  utilizadorInicio?: string;
  dataFim?: string;
  utilizadorFim?: string;
};

export type PlaneamentoFaseDetalhe = PlaneamentoFaseCard & {
  fasesAnteriores: FaseDependenciaInfo[];
  fasesSeguintes: FaseDependenciaInfo[];
  extra: PlaneamentoDetalheExtra;
  execucao?: PlaneamentoExecucaoInfo;
};
