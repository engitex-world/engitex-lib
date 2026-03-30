import { ArtigoEstrutura } from '@lib/modules/artigos/enums';
import { ArtigoComposicao } from '@lib/modules/artigos/types';

export type CreateArtigoDto = {
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
};
