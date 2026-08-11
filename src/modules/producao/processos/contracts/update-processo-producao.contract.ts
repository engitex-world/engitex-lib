import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ProcessoProducao } from '@lib/modules/producao/processos/types';

import { CreateProcessoProducaoRequest } from './create-processo-producao.contract';

export type UpdateProcessoProducaoRequest = Partial<CreateProcessoProducaoRequest>;

export type UpdateProcessoProducaoResponse = ServerActionResult<ProcessoProducao, ResponseError>;

export type InactivateProcessoProducaoResponse = ServerActionResult<
  { success: boolean },
  ResponseError
>;
