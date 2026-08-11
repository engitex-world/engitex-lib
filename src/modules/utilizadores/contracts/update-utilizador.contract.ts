import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { Utilizador } from '@lib/modules/utilizadores/types';

import { CreateUtilizadorRequest } from './create-utilizador.contract';

export type UpdateUtilizadorRequest = Partial<CreateUtilizadorRequest>;

export type UpdateUtilizadorResponse = ServerActionResult<Utilizador, ResponseError>;

export type UpdatePasswordUtilizadorRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePasswordUtilizadorResponse = ServerActionResult<
  { success: boolean },
  ResponseError
>;

export type InactivateUtilizadorResponse = ServerActionResult<{ success: boolean }, ResponseError>;
