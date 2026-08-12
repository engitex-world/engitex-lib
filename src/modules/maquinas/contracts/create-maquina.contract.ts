import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Maquina } from '@lib/modules/maquinas/types';

export type CreateMaquinaRequest = {
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
};

export type CreateMaquinaResponse = Maquina;
