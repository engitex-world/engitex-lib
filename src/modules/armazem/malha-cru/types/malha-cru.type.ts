import { AuditEntity } from '@lib/common/types';
import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { Artigo } from '@lib/modules/artigos/types';
import { Empresa } from '@lib/modules/empresas/types';
import { EncomendaArtigo } from '@lib/modules/encomendas/types/encomenda.type';

export type MalhaCru = {
  id: number;
  numeroEntrada: string;
  cliente: Empresa;
  observacoes?: string;
  artigos: MalhaCruArtigo[];
} & AuditEntity;

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
  encomendaArtigo?: EncomendaArtigo;
  quantidade: number;
  observacoes?: string;
  criadoEm: Date;
  criadoPor: string;
};
