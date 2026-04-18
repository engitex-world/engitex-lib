import { UtilizadorFuncao } from '../enums/utilizador.enum';

export type GetUtilizadoresRequest = {
  search?: string;
  funcoes?: UtilizadorFuncao[];
};
