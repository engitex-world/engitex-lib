import { EnsaioAmostra } from '../types';

export type GetCustoEnsaiosAmostraResponse = EnsaioAmostra & {
  custo: number;
  produtosSemPreco: string[];
};
