import { Utilizador } from '@lib/modules/utilizadores/types';

export type UpdatePasswordUtilizadorRequest = {
  passwordAtual: string;
  passwordNova: string;
};

export type UpdatePasswordUtilizadorResponse = Utilizador;
