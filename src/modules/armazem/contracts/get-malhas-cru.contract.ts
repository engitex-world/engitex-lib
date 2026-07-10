import { Paginated } from '@lib/common/types';

import { MalhaCru } from '../types';

export type GetMalhasCruRequest = {
  pesquisa?: string;
  clienteId?: number;
  artigoId?: number;
  disponivel?: boolean;
};

export type GetMalhasCruResponse = Promise<Paginated<MalhaCru>>;
