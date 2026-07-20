import { Paginated } from '@lib/common/types';

import { CadernoEncargos } from '../types';

export type GetCadernoEncargosResponse = Promise<Paginated<CadernoEncargos>>;
