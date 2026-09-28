import { Utilizador } from '@lib/modules/utilizadores/types';

import { CreateUtilizadorRequest } from './create-utilizador.contract';

export type UpdateUtilizadorRequest = Partial<CreateUtilizadorRequest>;

export type UpdateUtilizadorResponse = Utilizador;
