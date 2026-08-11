import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';
import { Utilizador } from '@lib/modules/utilizadores/types';

export type CreateUtilizadorRequest = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  password?: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};

export type CreateUtilizadorResponse = ServerActionResult<Utilizador, ResponseError>;
