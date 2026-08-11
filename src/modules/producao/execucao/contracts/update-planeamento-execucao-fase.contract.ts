import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { PlaneamentoFaseCard } from '../../planeamento/contracts';

export type UpdatePlaneamentoExecucaoFaseRequest = {
  encomendaArtigoFaseId: number;
  acao: UpdatePlaneamentoExecucaoFaseAcao;
  observacao?: string;
};

export type UpdatePlaneamentoExecucaoFaseAcao = 'INICIAR' | 'TERMINAR' | 'ADICIONAR_OBSERVACAO';

export type UpdatePlaneamentoExecucaoFaseResponse = ServerActionResult<
  PlaneamentoFaseCard,
  ResponseError
>;
