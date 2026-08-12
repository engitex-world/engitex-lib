import { Encomenda } from '../types';

export type LookupOrdensServicoRequest = {
  clienteId: number;
};

export type LookupOrdensServicoResponse = Encomenda[];
