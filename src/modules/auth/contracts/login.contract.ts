import { Utilizador } from '../../utilizadores/types';

export interface LoginRequest {
  nomeUtilizador: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  utilizador: Utilizador;
}
