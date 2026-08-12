import { Paginated } from '@lib/common/types';

import { CadernoEncargos } from '../types';

export type GetCadernoEncargosRequest = {
  search?: string;
  clienteId?: number;
};

export type GetCadernoEncargosResponse = Paginated<CadernoEncargos>;
