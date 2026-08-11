import { ResponseError } from '@lib/common/enums';
import { Paginated, ServerActionResult } from '@lib/common/types';

import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type GetEncomendasRequest = {
  pesquisa?: string;
  estado?: EncomendaEstado;
  clienteId?: number;
};

export type GetEncomendasResponse = ServerActionResult<Paginated<Encomenda>, ResponseError>;
