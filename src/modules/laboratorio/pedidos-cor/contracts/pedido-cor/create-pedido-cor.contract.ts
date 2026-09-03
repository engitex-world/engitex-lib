import { CreateArtigoRequest } from '@lib/modules/artigos/contracts';
import { Certificacao } from '@lib/modules/produtos/enums';

export type CreatePedidoCorRequest = {
  clienteId: number;
  artigo: CreateArtigoRequest;
  referenciaPedido?: string;
  artigoGramagem?: number;
  certificacoes?: Certificacao[];
  cadernoEncargosId?: number;
  dataEntregaPrevista?: string;
  observacoes?: string;
  amostras?: CreatePedidoCorAmostraRequest[];
};

export type CreatePedidoCorAmostraRequest = {
  codigoCorCliente: string;
  rgb: string;
  pantone?: string;
};
