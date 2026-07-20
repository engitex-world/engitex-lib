import { Paginated } from '@lib/common/types';

import { CadernoEncargos } from '../types';

export type GetCadernoEncargosRequest = {
  search?: string;
};

export type GetCadernoEncargosResponse = Promise<Paginated<CadernoEncargos>>;
