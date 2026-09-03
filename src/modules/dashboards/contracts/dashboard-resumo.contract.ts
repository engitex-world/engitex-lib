import { EncomendaArtigoFaseEstado } from '@lib/modules/encomendas/enums';
import { MaquinaEstado, SetorProducao } from '@lib/modules/maquinas/enums';

export type DashboardResumoResponse = {
  indicadores: DashboardResumoIndicadores;
  distribuicaoKilos: DashboardResumoDistribuicaoKilos[];
  encomendasAtrasadas: DashboardResumoArtigoAtencao[];
  encomendasEmRisco: DashboardResumoArtigoAtencao[];
  maquinasParadas: DashboardResumoMaquina[];
  maquinasSemTrabalho: DashboardResumoMaquina[];
  artigosSemSetor: DashboardResumoArtigoAtencao[];
  artigosSemPrazo: DashboardResumoArtigoAtencao[];
  artigosSemPlaneamento: DashboardResumoArtigoAtencao[];
};

export type DashboardResumoIndicadores = {
  kilosDentroFabrica: number;
  encomendasAtrasadas: number;
  encomendasEmRisco: number;
  maquinasParadas: number;
  maquinasSemTrabalho: number;
  artigosSemSetor: number;
  artigosSemPrazo: number;
};

export type DashboardResumoDistribuicaoKilos = {
  setor: SetorProducao;
  quantidadeKg: number;
};

export type DashboardResumoArtigoAtencao = {
  encomendaId: number;
  numeroEncomenda: string;
  encomendaArtigoId: number;
  ordemServico: string;
  cliente: string;
  artigo: string;
  setor?: SetorProducao;
  fase?: string;
  estadoFase?: EncomendaArtigoFaseEstado;
  dataEntregaPrevista?: Date;
  dataPrevistaFim?: Date;
};

export type DashboardResumoMaquina = {
  id: number;
  nome: string;
  codigo: string;
  estado: MaquinaEstado;
  totalFasesPlaneadas: number;
};
