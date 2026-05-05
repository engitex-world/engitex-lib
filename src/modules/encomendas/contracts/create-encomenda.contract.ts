import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaEstado } from '../enums';

export type CreateEncomendaArtigoRequest = {
  artigoId: number;
  gramagemCru?: number;
  gramagemFinal: number;
  larguraCru?: number;
  larguraFinal: number;
  processoProducaoId: number;
  lugarArmazem?: string;
  observacoes?: string;
  quantidade: number;
  unidade: string;
};

export type CreateEncomendaRequest = {
  numeroEncomenda: string;
  clienteId: number;
  codigoCor: string;
  certificacoes?: Certificacao[];
  isDevolucao?: boolean;
  encomendaAnteriorId?: number;
  observacoes?: string;
  estado?: EncomendaEstado;
  artigos: CreateEncomendaArtigoRequest[];
};
