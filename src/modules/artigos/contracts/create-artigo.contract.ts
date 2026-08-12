import { ArtigoEstrutura } from '@lib/modules/artigos/enums';
import { Artigo, ArtigoComposicao } from '@lib/modules/artigos/types';

export type CreateArtigoRequest = {
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
};

export type CreateArtigoResponse = Artigo;
