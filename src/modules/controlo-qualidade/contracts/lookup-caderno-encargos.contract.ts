import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { CadernoEncargos } from '../types';

export type LookupCadernoEncargosRequest = {
  clienteId?: number;
};

export type LookupCadernoEncargosResponse = ServerActionResult<CadernoEncargos[], ResponseError>;
