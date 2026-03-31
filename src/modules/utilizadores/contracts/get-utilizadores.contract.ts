import { UtilizadorFuncao } from '../enums/utilizador.enum';

export type GetUtilizadoresFilterContract = {
  search?: string;
  funcoes?: UtilizadorFuncao[];
};
