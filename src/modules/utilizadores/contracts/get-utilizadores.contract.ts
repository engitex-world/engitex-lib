import { Paginated } from '@lib/common/types';

import { UtilizadorFuncao } from '../enums/utilizador.enum';
import { Utilizador } from '../types';

export type GetUtilizadoresRequest = {
  search?: string;
  funcoes?: UtilizadorFuncao[];
};

export type GetUtilizadoresResponse = Promise<Paginated<Utilizador>>;
