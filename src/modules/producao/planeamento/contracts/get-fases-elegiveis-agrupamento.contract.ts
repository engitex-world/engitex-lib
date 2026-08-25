import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type GetFasesElegiveisAgrupamentoRequest = {
  encomendaArtigoFaseId: number;
};

export type GetFasesElegiveisAgrupamentoResponse = {
  fasesElegiveis: PlaneamentoFaseCard[];
};
