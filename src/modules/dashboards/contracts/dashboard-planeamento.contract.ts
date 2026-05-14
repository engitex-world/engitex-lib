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
    faseEmExecucao?: DashboardPlaneamentoMaquinaEncomenda;
    proximaFase?: DashboardPlaneamentoMaquinaEncomenda;
    totalFasesPlaneadas: number;
  };
};

export type DashboardPlaneamentoMaquinaEncomenda = {
  encomendaNumero: string;
  ordemServico: string;
  corHex: string;
  codigoCor: string;
  cliente: string;
  artigo: string;
  fase: string;
  quantidade: number;
};
