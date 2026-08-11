import { ResponseError } from '@lib/common/enums';
import { Paginated, ServerActionResult } from '@lib/common/types';

import { CadernoEncargos } from '../types';

export type GetCadernoEncargosRequest = {
  search?: string;
  clienteId?: number;
};

export type GetCadernoEncargosResponse = ServerActionResult<
  Paginated<CadernoEncargos>,
  ResponseError
>;
