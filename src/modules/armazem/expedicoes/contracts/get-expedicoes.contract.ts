import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetExpedicoesResponseData = {
  emCarregamento: PlaneamentoFaseCard[];
  porIniciar: PlaneamentoFaseCard[];
};

export type GetExpedicoesResponse = GetExpedicoesResponseData;
