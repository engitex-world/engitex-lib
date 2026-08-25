import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Maquina } from '@lib/modules/maquinas/types';
import { MaquinaEspecificacoes } from '@lib/modules/maquinas/types/maquina-especificacoes.type';

export type CreateMaquinaRequest = {
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
  fabricante?: string;
  modelo?: string;
  numeroSerie?: string;
  anoFabrico?: number;
  dataInstalacao?: Date;
  especificacoes?: MaquinaEspecificacoes;
  horarios: CreateMaquinaHorarioRequest[];
};

export type CreateMaquinaHorarioRequest = {
  diaSemana: number;
  horaInicio: string;
  horaFim: string;
};

export type CreateMaquinaResponse = Maquina;
