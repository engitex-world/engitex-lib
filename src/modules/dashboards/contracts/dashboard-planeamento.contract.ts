import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type DashboardPlaneamentoResponse = {
  grupo: MaquinaGrupo;
  maquinas: DashboardPlaneamentoMaquina[];
};

export type DashboardPlaneamentoMaquina = {
  id: number;
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  planeamento: {
    emExecucao?: DashboardPlaneamentoMaquinaInfo;
    proxima?: DashboardPlaneamentoMaquinaInfo;
    totalFasesPlaneadas: number;
  };
};

export type DashboardPlaneamentoMaquinaInfo = {
  encomendaNumero: string;
  ordemServico: string;
  cor: string;
  cliente: string;
  artigo: string;
  fase: string;
  quantidade: number;
};
