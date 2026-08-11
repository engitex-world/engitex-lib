import { ResponseError } from '@lib/common/enums';
import { Paginated, ServerActionResult } from '@lib/common/types';

import { PedidoCorEstado } from '../../enums';
import { PedidoCor } from '../../types';

export type GetPedidosCorRequest = {
  empresaId?: string;
  estado?: PedidoCorEstado;
};

export type GetPedidosCorResponse = ServerActionResult<Paginated<PedidoCor>, ResponseError>;
