import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';
import { GrupoCorantes } from '@lib/modules/produtos/enums/produto.enum';

import { TabelaAuxiliaresIntervalo } from '../../tabela-auxiliares/types';

export type ProcessoTingimento = {
  id: number;
  nome: string;
  grupoCorantes: GrupoCorantes;
  fibrasCompativeis: ArtigoFibra[];
  temperatura: number;
  prioridade: number;
  tabelaAuxiliares: TabelaAuxiliaresIntervalo[];
  ativo: boolean;
};
