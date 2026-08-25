import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type CreatePlaneamentoFaseAgrupamentoRequest = {
  maquinaId: number;
  encomendaArtigoFaseIds: number[];
};

export type CreatePlaneamentoFaseAgrupamentoResponse = {
  agrupamentoId: number;
  fases: PlaneamentoFaseCard[];
};
