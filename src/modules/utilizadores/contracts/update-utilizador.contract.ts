import { Utilizador } from '@lib/modules/utilizadores/types';

import { CreateUtilizadorRequest } from './create-utilizador.contract';

export type UpdateUtilizadorRequest = Partial<CreateUtilizadorRequest>;

export type UpdateUtilizadorResponse = Promise<Utilizador>;

export type UpdatePasswordUtilizadorRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePasswordUtilizadorResponse = Promise<{ success: boolean }>;

export type InactivateUtilizadorResponse = Promise<{ success: boolean }>;
