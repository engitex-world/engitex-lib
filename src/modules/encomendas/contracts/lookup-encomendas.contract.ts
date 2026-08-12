
import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type LookupEncomendasRequest = {
  estado?: EncomendaEstado;
  clienteId?: number;
};

export type LookupEncomendasResponse = Encomenda[];
