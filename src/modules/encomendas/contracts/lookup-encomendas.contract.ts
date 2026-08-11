import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type LookupEncomendasRequest = {
  estado?: EncomendaEstado;
  clienteId?: number;
};

export type LookupEncomendasResponse = ServerActionResult<Encomenda[], ResponseError>;
