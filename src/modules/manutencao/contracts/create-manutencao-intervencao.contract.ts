import { ManutencaoCausa, ManutencaoPrioridade, ManutencaoTipo } from '../enums';

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
