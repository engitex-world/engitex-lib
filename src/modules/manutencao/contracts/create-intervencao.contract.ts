import { ManutencaoCausa, ManutencaoPrioridade, ManutencaoTipo } from '../enums';

export type CreateIntervencaoRequest = {
  maquinaId: number;
  tecnicoId?: number;
  tipo: ManutencaoTipo;
  causa: ManutencaoCausa;
  prioridade: ManutencaoPrioridade;
  descricao: string;
  dataPlaneada: Date;
  dataInicio: Date;
  dataFim?: Date;
};
