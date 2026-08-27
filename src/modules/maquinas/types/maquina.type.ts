import { DiaSemana } from '@lib/common/enums';
import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { MaquinaEstado } from '@lib/modules/maquinas/enums/maquina-estado.enum';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums/maquina-grupo.enum';
import { MaquinaEspecificacoes } from '@lib/modules/maquinas/types/maquina-especificacoes.type';

export type Maquina = {
  id: number;
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  estado: MaquinaEstado;
  observacoes?: string;
  fabricante?: string;
  modelo?: string;
  numeroSerie?: string;
  anoFabrico?: number;
  dataInstalacao?: Date;
  especificacoes?: MaquinaEspecificacoes;
  horarios: MaquinaHorario[];
} & AuditEntity;

export type MaquinaHorario = {
  id: number;
  diaSemana: DiaSemana;
  horaInicio: string;
  horaFim: string;
};
