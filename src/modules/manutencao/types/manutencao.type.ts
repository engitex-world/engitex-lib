import { Common } from '@lib/common/types';
import { Maquina } from '@lib/modules/maquinas/types';

import { ManutencaoCausa, ManutencaoEstado, ManutencaoPrioridade, ManutencaoTipo } from '../enums';

export type ManutencaoIntervencao = {
  maquina: Maquina;
  maquinaId: number;
  responsavelId?: number;
  descricao: string;
  tipo?: ManutencaoTipo;
  causa?: ManutencaoCausa;
  prioridade?: ManutencaoPrioridade;
  estado: ManutencaoEstado;
  dataPlaneada?: Date;
  dataInicio?: Date;
  dataFim?: Date;
} & Common;
