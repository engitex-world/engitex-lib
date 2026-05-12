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
  planeamento: {
    emExecucao?: MaquinaFasePlaneadaInfo;
    proxima?: MaquinaFasePlaneadaInfo;
    totalFasesPlaneadas: number;
  };
};

export type MaquinaFasePlaneadaInfo = {
  encomendaNumero: string;
  cliente: string;
  artigoNome: string;
  faseNome: string;
};

export type MaquinaFasesContagem = {
  [key in FaseExecucaoEstado]?: number;
};
