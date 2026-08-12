import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaEstado } from '../enums';
import { Encomenda } from '../types';

export type CreateEncomendaRequest = {
  numeroEncomenda: string;
  clienteId: number;
  codigoCor: string;
  corId?: number;
  cadernoEncargosId?: number;
  certificacoes?: Certificacao[];
  observacoes?: string;
  estado?: EncomendaEstado;
  dataEntregaPrevista?: Date;
  artigos: CreateEncomendaArtigoRequest[];
};

export type CreateEncomendaArtigoRequest = {
  artigoId: number;
  malhaCruArtigoId?: number;
  gramagemCru?: number;
  gramagemFinal: number;
  larguraCru?: number;
  larguraFinal: number;
  processoProducaoId: number;
  lugarArmazem?: string;
  observacoes?: string;
  quantidade: number;
  unidade: ArtigoUnidade;
  fases: CreateEncomendaArtigoFaseRequest[];
};

export type CreateEncomendaArtigoFaseRequest = {
  producaoFaseId: number;
  ordem: number;
  obrigatoria?: boolean;
  observacoes?: string;
};

export type CreateEncomendaResponse = Promise<Encomenda>;
