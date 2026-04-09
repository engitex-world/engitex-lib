import { ArtigoEstrutura } from '@lib/modules/artigos/enums';
import { ArtigoComposicao } from '@lib/modules/artigos/types';

export type CreateArtigoRequest = {
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
};
