import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums/produto.enum';
import { Produto } from '@lib/modules/produtos/types';

import { ProcessoTingimento } from '../../processos-tingimento/types';

export type TabelaAuxiliaresIntervalo = {
  id: number;
  processoTingimento: ProcessoTingimento;
  min: number;
  max: number;
  produtos: TabelaAuxiliaresProduto[];
};

export type TabelaAuxiliaresProduto = {
  id: number;
  intervalo: TabelaAuxiliaresIntervalo;
  produto: Produto;
  quantidade: number;
  unidade: ProdutoReceitaLaboratorioUnidade;
};
