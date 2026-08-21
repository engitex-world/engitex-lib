import { PedidoCorAmostra } from '../../types';

export type GetCoresSemelhantesAmostraResponse = Array<
  PedidoCorAmostra & {
    deltaE: number;
  }
>;
