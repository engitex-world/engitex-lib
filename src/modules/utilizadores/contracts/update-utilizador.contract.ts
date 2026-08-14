import { Utilizador } from '@lib/modules/utilizadores/types';

import { CreateUtilizadorRequest } from './create-utilizador.contract';

export type UpdateUtilizadorRequest = Partial<CreateUtilizadorRequest>;

export type UpdateUtilizadorResponse = Utilizador;

export type UpdatePasswordUtilizadorRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePasswordUtilizadorResponse = { success: boolean };

export type InactivateUtilizadorResponse = { success: boolean };
