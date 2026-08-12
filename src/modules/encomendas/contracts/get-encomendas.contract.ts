import { Paginated } from '@lib/common/types';

import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type GetEncomendasRequest = {
  pesquisa?: string;
  estado?: EncomendaEstado;
  clienteId?: number;
};

export type GetEncomendasResponse = Paginated<Encomenda>;
