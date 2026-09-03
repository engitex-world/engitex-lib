import { Paginated } from '@lib/common/types';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';
import { Utilizador } from '@lib/modules/utilizadores/types';

export type GetUtilizadoresRequest = {
  pesquisa?: string;
  funcoes?: UtilizadorFuncao[];
};

export type GetUtilizadoresResponse = Paginated<Utilizador>;
