import { ArtigoFibra } from '@lib/modules/artigos/enums';
import { PreparacaoTingimento } from '@lib/modules/tinturaria/processos-tingimento/enums';

export type UpdateProcessoTingimentoAmostraContract = {
  preparacaoTingimento: PreparacaoTingimento;
  processosTingimento: ProcessoTingimentoAmostra[];
};

type ProcessoTingimentoAmostra = {
  id?: number;
  processoTingimentoId: number;
  fibras: ArtigoFibra[];
  pesoAmostra: number;
  quantidadeBanho: number;
  relacaoBanho: number;
};
