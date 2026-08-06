import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums/maquina-grupo.enum';

export type Maquina = {
  id: number;
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
} & AuditEntity;
