import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ProcessoProducao } from '@lib/modules/producao/processos/types';

export type CreateProcessoProducaoFaseRequest = {
  producaoFaseId: number;
  ordem: number;
  obrigatoria?: boolean;
  observacoes?: string;
};

export type CreateProcessoProducaoRequest = {
  nome: string;
  fases: CreateProcessoProducaoFaseRequest[];
};

export type CreateProcessoProducaoResponse = ServerActionResult<ProcessoProducao, ResponseError>;
