import { Utilizador } from '@lib/modules/utilizadores/types';

export type UpdatePasswordUtilizadorRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePasswordUtilizadorResponse = Utilizador;
