import { Paginated } from '@lib/common/types';

import { ControloQualidadeResultadoEstado } from '../enums';
import { ControloQualidadeResultado } from '../types';

export type GetControloQualidadeResultadosRequest = {
  encomendaArtigoId?: number;
  estado?: ControloQualidadeResultadoEstado;
};

export type GetControloQualidadeResultadosResponse = Promise<Paginated<ControloQualidadeResultado>>;
