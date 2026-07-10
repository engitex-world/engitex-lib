import { Common } from '@lib/common/types/base-entity.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type ProducaoFase = {
  nome: string;
  grupoMaquinas: MaquinaGrupo;
  tempoPreparacao: number;
  tempoKg?: number;
  tempoCiclo?: number;
};

export type ProcessoProducaoFase = {
  producaoFaseId: number;
  producaoFase: ProducaoFase;
  ordem: number;
  obrigatoria: boolean;
  observacoes?: string;
  processoProducaoId: number;
};

export type ProcessoProducao = {
  nome: string;
  fases: ProcessoProducaoFase[];
} & Common;
