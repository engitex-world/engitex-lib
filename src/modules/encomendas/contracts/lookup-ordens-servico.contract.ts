import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { Encomenda } from '../types';

export type LookupOrdensServicoRequest = {
  clienteId: number;
};

export type LookupOrdensServicoResponse = ServerActionResult<Encomenda[], ResponseError>;
