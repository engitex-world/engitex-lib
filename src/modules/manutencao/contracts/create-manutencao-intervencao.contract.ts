import { ManutencaoCausa, ManutencaoPrioridade, ManutencaoTipo } from '../enums';
import { ManutencaoIntervencao } from '../types';

export type CreateManutencaoIntervencaoRequest = {
  maquinaId: number;
  responsavelId?: number;
  descricao: string;
  tipo?: ManutencaoTipo;
  causa?: ManutencaoCausa;
  prioridade?: ManutencaoPrioridade;
  dataInicio?: Date;
  dataFim?: Date;
  bloquear?: boolean; // Bloqueia a máquina e todas as fases em execução associadas
};

export type CreateManutencaoIntervencaoResponse = ManutencaoIntervencao;
