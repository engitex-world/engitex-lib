import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetPlaneamentoControloQualidadeResponseData = {
  emExecucao: PlaneamentoFaseCard[];
  porIniciar: PlaneamentoFaseCard[];
};

export type GetPlaneamentoControloQualidadeResponse = GetPlaneamentoControloQualidadeResponseData;
