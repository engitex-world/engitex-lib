import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { MalhaCru } from '@lib/modules/armazem/types';

export type CreateMalhaCruRequest = {
  numeroEntrada: string;
  clienteId: number;
  observacoes?: string;
  artigos: CreateMalhaCruArtigoRequest[];
};

export type CreateMalhaCruArtigoRequest = {
  artigoId: number;
  largura: number;
  gramagem: number;
  quantidadeRecebida: number;
  unidade: ArtigoUnidade;
  lugarArmazem?: string;
};

export type CreateMalhaCruResponse = ServerActionResult<MalhaCru, ResponseError>;
