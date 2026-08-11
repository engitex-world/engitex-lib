import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { PedidoCorAmostra } from '../../types';

export type GetPedidoCorAmostraRequest = {
  amostraId?: string;
};

export type GetPedidoCorAmostraResponse = ServerActionResult<PedidoCorAmostra, ResponseError>;
