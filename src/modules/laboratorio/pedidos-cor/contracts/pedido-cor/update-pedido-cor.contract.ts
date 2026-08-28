import { CreateArtigoRequest } from '@lib/modules/artigos/contracts';
import { Certificacao } from '@lib/modules/produtos/enums';

export type UpdatePedidoCorAmostraRequest = {
  id?: number;
  codigoCorCliente: string;
  rgb: string;
  pantone?: string;
};

export type UpdatePedidoCorRequest = {
  referenciaPedido?: string;
  cadernoEncargosId?: number;
  certificacoes?: Certificacao[];
  artigo?: CreateArtigoRequest;
  artigoGramagem?: number;
  dataEntregaPrevista?: string;
  observacoes?: string;
  amostras?: UpdatePedidoCorAmostraRequest[];
};
