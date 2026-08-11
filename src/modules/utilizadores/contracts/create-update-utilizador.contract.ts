import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';
import { Utilizador } from '@lib/modules/utilizadores/types';

// ==================== Request Contracts ====================

export type CreateUtilizadorRequest = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  password?: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};

export type UpdateUtilizadorRequest = Partial<CreateUtilizadorRequest>;

export type UpdatePasswordUtilizadorRequest = {
  currentPassword: string;
  newPassword: string;
};

// ==================== Response Contracts ====================

export type CreateUtilizadorResponse = ServerActionResult<Utilizador, ResponseError>;

export type UpdateUtilizadorResponse = ServerActionResult<Utilizador, ResponseError>;

export type UpdatePasswordUtilizadorResponse = ServerActionResult<
  { success: boolean },
  ResponseError
>;

export type InactivateUtilizadorResponse = ServerActionResult<{ success: boolean }, ResponseError>;
