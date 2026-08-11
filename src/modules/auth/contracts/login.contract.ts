import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { AuthUtilizador } from '../types';

export type LoginRequest = {
  nomeUtilizador: string;
  password: string;
};

export type LoginResponseData = {
  accessToken: string;
  utilizador: AuthUtilizador;
};

export type LoginResponse = ServerActionResult<LoginResponseData, ResponseError>;
