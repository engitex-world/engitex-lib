import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaEstado } from '../enums';

import { CreateEncomendaArtigoPartidaRequest } from './create-encomenda-artigo-partidas.contract';

export type UpdateEncomendaRequest = {
  numeroEncomenda?: string;
  clienteId?: number;
  codigoCor?: string;
  certificacoes?: Certificacao[];
  isDevolucao?: boolean;
  encomendaAnteriorId?: number;
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
  partidas?: CreateEncomendaArtigoPartidaRequest[];
  fases?: UpdateEncomendaArtigoFaseRequest[];
};

export type UpdateEncomendaArtigoFaseRequest = {
  id: number;
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria?: boolean;
  observacoes?: string;
};
