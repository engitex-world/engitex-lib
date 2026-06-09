import { Common } from '@lib/common/types';
import { Maquina } from '@lib/modules/maquinas/types';

import { ManutencaoCausa, ManutencaoPrioridade, ManutencaoTipo } from '../enums';

export type ManutencaoIntervencao = {
  maquina: Maquina;
  maquinaId: number;
  tecnicoId?: number;
  tipo: ManutencaoTipo;
  causa: ManutencaoCausa;
  prioridade: ManutencaoPrioridade;
  descricao: string;
  dataPlaneada: Date;
  dataInicio: Date;
  dataFim?: Date;
} & Common;
