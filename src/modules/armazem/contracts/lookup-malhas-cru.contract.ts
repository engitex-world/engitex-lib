import { ArtigoEstrutura } from '@lib/modules/artigos/enums';
import { ArtigoComposicao } from '@lib/modules/artigos/types';

export type LookupMalhasCruRequest = {
  estrutura?: ArtigoEstrutura;
  composicao?: ArtigoComposicao[];
};
