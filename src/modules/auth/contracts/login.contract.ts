import { AuthUtilizador } from '../types';

export type LoginRequest = {
  nomeUtilizador: string;
  password: string;
};

export type LoginResponseData = {
  accessToken: string;
  utilizador: AuthUtilizador;
};

export type LoginResponse = Promise<LoginResponseData>;
