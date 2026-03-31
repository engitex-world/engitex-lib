import { AuthUtilizador } from '../types';

export type LoginRequestContract = {
  nomeUtilizador: string;
  password: string;
};

export interface LoginResponse {
  accessToken: string;
  utilizador: AuthUtilizador;
}
