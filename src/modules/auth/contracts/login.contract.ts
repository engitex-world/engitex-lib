import { AuthUtilizador } from '../types';

export type LoginRequestContract = {
  nomeUtilizador: string;
  password: string;
};

export interface LoginResponseContract {
  accessToken: string;
  utilizador: AuthUtilizador;
}
