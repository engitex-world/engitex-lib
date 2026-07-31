import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetControloQualidadeResultadosResponse = {
  testesEmExecucao: PlaneamentoFaseCard[];
  testesPorIniciar: PlaneamentoFaseCard[];
};
