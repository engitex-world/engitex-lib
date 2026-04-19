import { AuthUtilizador } from '../types';

export type LoginRequest = {
  nomeUtilizador: string;
  password: string;
};

export interface LoginResponse {
  accessToken: string;
  utilizador: AuthUtilizador;
}
