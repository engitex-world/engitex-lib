import { PedidoCorEstado } from '../enums';

export type GetPedidosCorRequest = {
  empresaId?: string;
  estado?: PedidoCorEstado;
};
