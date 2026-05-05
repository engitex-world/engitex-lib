import { EncomendaEstado } from '../enums';

export type GetEncomendasRequest = {
  pesquisa?: string;
  estado?: EncomendaEstado;
  clienteId?: number;
};
