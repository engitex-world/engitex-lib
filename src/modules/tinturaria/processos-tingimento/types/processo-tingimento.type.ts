import { TabelaAuxiliaresIntervalo } from '../../tabela-auxiliares/types';

import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';
import { GrupoCorantes } from '@lib/modules/produtos/enums/produto.enum';

export type ProcessoTingimento = {
  id: number;
  nome: string;
  grupoCorantes: GrupoCorantes;
  fibrasCompativeis: ArtigoFibra[];
  temperatura: number;
  tabelaAuxiliares: TabelaAuxiliaresIntervalo[];
};
