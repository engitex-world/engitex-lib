import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type UpdateEncomendaRequest = {
  numeroEncomenda?: string;
  clienteId?: number;
  codigoCor?: string;
  certificacoes?: Certificacao[];
  observacoes?: string;
  estado?: EncomendaEstado;
  dataEntregaPrevista?: Date;
  artigos?: UpdateEncomendaArtigoRequest[];
};

export type UpdateEncomendaArtigoRequest = {
  id?: number;
  artigoId?: number;
  malhaCruArtigoId?: number;
  gramagemCru?: number;
  gramagemFinal?: number;
  larguraCru?: number;
  larguraFinal?: number;
  processoProducaoId?: number;
  lugarArmazem?: string;
  observacoes?: string;
  quantidade?: number;
  unidade?: ArtigoUnidade;
  fases?: UpdateEncomendaArtigoFaseRequest[];
};

export type UpdateEncomendaArtigoFaseRequest = {
  id?: number;
  producaoFaseId: number;
  ordem: number;
  obrigatoria?: boolean;
  observacoes?: string;
};

export type UpdateEncomendaResponse = ServerActionResult<Encomenda, ResponseError>;
