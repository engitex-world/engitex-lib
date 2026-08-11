import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ArtigoEstrutura } from '@lib/modules/artigos/enums';
import { Artigo, ArtigoComposicao } from '@lib/modules/artigos/types';

export type CreateArtigoRequest = {
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
};

export type CreateArtigoResponse = ServerActionResult<Artigo, ResponseError>;
