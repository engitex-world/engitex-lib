import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { PlaneamentoFaseCard } from './get-planeamento-producao.contract';

export type UpdatePlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
  maquinaId?: number;
  posicaoDestino?: number;
  observacoesPlaneamento?: string;
};

export type RemoverPlaneamentoFaseRequest = {
  encomendaArtigoFaseId: number;
};

export type UpdatePlaneamentoFaseResponse = ServerActionResult<PlaneamentoFaseCard, ResponseError>;
