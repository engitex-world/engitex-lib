import { Common } from '@lib/common/types/base-entity.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type ProcessoProducaoFase = {
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria: boolean;
  observacoes?: string;
  processoProducaoId: number;
};

export type ProcessoProducao = {
  nome: string;
  descricao?: string;
  fases: ProcessoProducaoFase[];
} & Common;
