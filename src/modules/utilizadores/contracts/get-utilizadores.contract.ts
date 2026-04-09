import { UtilizadorFuncao } from '../enums/utilizador.enum';

export type GetUtilizadoresFilterRequest = {
  search?: string;
  funcoes?: UtilizadorFuncao[];
};
