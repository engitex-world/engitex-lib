import { EncomendaArtigoDefeito } from '../types';

export type GetEncomendaArtigoDefeitosRequest = {
  encomendaArtigoFaseId?: number;
  encomendaArtigoId?: number;
};

export type GetEncomendaArtigoDefeitosResponse = EncomendaArtigoDefeito[];
