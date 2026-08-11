import { MalhaCru } from '@lib/modules/armazem/types';
import { ArtigoUnidade } from '@lib/modules/artigos/enums';

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

export type CreateMalhaCruResponse = Promise<MalhaCru>;
