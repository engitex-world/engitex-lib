import { Common } from '@lib/common/types';
import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { Artigo } from '@lib/modules/artigos/types';
import { Empresa } from '@lib/modules/empresas/types';

export type MalhaCru = {
  numeroEntrada: string;
  cliente: Empresa;
  observacoes?: string;
  artigos: MalhaCruArtigo[];
} & Common;

export type MalhaCruArtigo = {
  id: number;
  artigo: Artigo;
  largura: number;
  gramagem: number;
  quantidadeRecebida: number;
  quantidadeRestante: number;
  unidade: ArtigoUnidade;
  lugarArmazem?: string;
  alocacoes: MalhaCruArtigoEncomenda[];
};

export type MalhaCruArtigoEncomenda = {
  id: number;
  encomendaArtigoId: number;
  quantidade: number;
  observacoes?: string;
  criadoEm: Date;
  criadoPor: string;
};
