import { EnsaioAmostra } from '../types';

export type GetCustoEnsaiosAmostraResponse = CustoEnsaiosAmostra[];

type CustoEnsaiosAmostra = EnsaioAmostra & {
  custo: number;
  produtosSemPreco: string[];
};
