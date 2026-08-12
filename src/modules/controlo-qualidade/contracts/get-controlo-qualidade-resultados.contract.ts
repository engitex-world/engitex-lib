import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetControloQualidadeResultadosResponseData = {
  testesEmExecucao: PlaneamentoFaseCard[];
  testesPorIniciar: PlaneamentoFaseCard[];
};

export type GetControloQualidadeResultadosResponse = Promise<GetControloQualidadeResultadosResponseData>;
