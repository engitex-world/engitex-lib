import { Paginated } from '@lib/common/types';

import { ControloQualidadeResultado, ControloQualidadeResultadoEstado } from '../types';

export type GetControloQualidadeResultadosRequest = {
  encomendaArtigoId?: number;
  estado?: ControloQualidadeResultadoEstado;
};

export type GetControloQualidadeResultadosResponse = Promise<Paginated<ControloQualidadeResultado>>;
