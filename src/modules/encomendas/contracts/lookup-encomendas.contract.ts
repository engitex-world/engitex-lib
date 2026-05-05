import { EncomendaEstado } from '../enums';

export type LookupEncomendasRequest = {
  estado?: EncomendaEstado;
  clienteId?: number;
};
