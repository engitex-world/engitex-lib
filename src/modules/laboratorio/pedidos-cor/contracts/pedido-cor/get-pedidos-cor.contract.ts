import { Paginated } from '@lib/common/types';

import { PedidoCorEstado } from '../../enums';
import { PedidoCor } from '../../types';

export type GetPedidosCorRequest = {
  empresaId?: string;
  estado?: PedidoCorEstado;
};

export type GetPedidosCorResponse = Paginated<PedidoCor>;
