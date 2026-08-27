import { LookupOption } from '@lib/common/types/lookup.type';
import { ArtigoComposicao } from '@lib/modules/artigos/types';

import { ArtigoEstrutura } from '../enums';

type ArtigoLookup = LookupOption<{
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
}>;

export type LookupArtigosResponse = ArtigoLookup[];
