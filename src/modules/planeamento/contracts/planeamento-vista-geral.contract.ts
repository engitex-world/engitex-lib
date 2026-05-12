import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado } from '../enums';

export type VistaGeralMaquinasResponse = {
  grupo: MaquinaGrupo;
  maquinas: VistaGeralMaquina[];
};

export type VistaGeralMaquina = {
  id: number;
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  totalFasesPlaneadas: number;
  contagemPorEstado: MaquinaFasesContagem;
  faseEmExecucao?: FaseEmExecucaoInfo;
};

export type FaseEmExecucaoInfo = {
  encomendaNumero: string;
  cliente: string;
  artigoNome: string;
  faseNome: string;
};

export type MaquinaFasesContagem = {
  [key in FaseExecucaoEstado]?: number;
};
