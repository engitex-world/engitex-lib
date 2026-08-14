import { ManutencaoCausa, ManutencaoPrioridade, ManutencaoTipo } from '../enums';
import { ManutencaoIntervencao } from '../types';

export type CreateManutencaoIntervencaoRequest = {
  maquinaId: number;
  responsavelId?: number;
  descricao: string;
  tipo?: ManutencaoTipo;
  causa?: ManutencaoCausa;
  prioridade?: ManutencaoPrioridade;
  dataPlaneada?: Date;
  dataInicio?: Date;
  dataFim?: Date;
};

export type CreateManutencaoIntervencaoResponse = ManutencaoIntervencao;
