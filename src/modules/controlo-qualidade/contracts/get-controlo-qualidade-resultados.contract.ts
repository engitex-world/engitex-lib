import { Paginated } from '@lib/common/types';

import { ControloQualidadeResultado } from '../types';

export type GetControloQualidadeResultadosRequest = {
  encomendaArtigoId?: number;
  estado?: string;
};

export type GetControloQualidadeResultadosResponse = Promise<Paginated<ControloQualidadeResultado>>;
