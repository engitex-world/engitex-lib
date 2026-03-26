import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums/produto.enum';
import { Produto } from '@lib/modules/produtos/types';
import { ProcessoTingimento } from '../../processos-tingimento/types';

export type TabelaAuxiliaresIntervalo = {
  id: number;
  processoTingimento: ProcessoTingimento;
  min: number;
  max: number;
  produtos: Produto[];
};

export type TabelaAuxiliaresProduto = {
  id: number;
  intervaloId: number;
  produto: Produto;
  quantidade: number;
  unidade: ProdutoReceitaLaboratorioUnidade;
};
