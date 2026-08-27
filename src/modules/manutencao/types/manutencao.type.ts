import { AuditEntity } from '@lib/common/types';
import { Maquina } from '@lib/modules/maquinas/types';

import { ManutencaoCausa, ManutencaoEstado, ManutencaoPrioridade, ManutencaoTipo } from '../enums';

export type ManutencaoIntervencao = {
  id: number;
  maquina: Maquina;
  maquinaId: number;
  responsavelId?: number;
  descricao: string;
  tipo?: ManutencaoTipo;
  causa?: ManutencaoCausa;
  prioridade?: ManutencaoPrioridade;
  estado: ManutencaoEstado;
  dataInicio?: Date;
  dataFim?: Date;
} & AuditEntity;
