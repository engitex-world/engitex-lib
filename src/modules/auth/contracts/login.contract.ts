import { Utilizador } from '../../utilizadores/types';

export interface LoginResponse {
  accessToken: string;
  utilizador: Utilizador;
}
