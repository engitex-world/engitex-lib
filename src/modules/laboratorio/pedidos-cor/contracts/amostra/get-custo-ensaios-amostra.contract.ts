
import { EnsaioAmostra } from '../../types';

export type CustoEnsaiosAmostra = EnsaioAmostra & {
  custo: number;
  produtosSemPreco: string[];
};

export type GetCustoEnsaiosAmostraResponse = CustoEnsaiosAmostra[];
