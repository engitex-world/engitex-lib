import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetControloQualidadeResultadosRequest = Record<string, never>;

export type GetControloQualidadeResultadosResponse = {
  testesEmExecucao: PlaneamentoFaseCard[];
  testesPorIniciar: PlaneamentoFaseCard[];
};
