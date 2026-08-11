import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { PlaneamentoFaseCard } from '@lib/modules/producao/planeamento/contracts';

export type GetControloQualidadeResultadosResponseData = {
  testesEmExecucao: PlaneamentoFaseCard[];
  testesPorIniciar: PlaneamentoFaseCard[];
};

export type GetControloQualidadeResultadosResponse = ServerActionResult<
  GetControloQualidadeResultadosResponseData,
  ResponseError
>;
