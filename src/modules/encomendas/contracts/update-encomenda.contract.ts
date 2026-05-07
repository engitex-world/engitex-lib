import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaArtigoUnidade, EncomendaEstado } from '../enums';

import { CreateEncomendaArtigoFaseRequest } from './create-encomenda.contract';

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
  artigos?: EncomendaArtigosOperations;
};

export type EncomendaArtigosOperations = {
  add: Omit<UpdateEncomendaArtigoRequest, 'id' | 'fases'> &
    {
      fases: CreateEncomendaArtigoFaseRequest[];
    }[];
  update: UpdateEncomendaArtigoRequest[];
  deleteIds: number[];
};

export type UpdateEncomendaArtigoRequest = {
  id: number;
  artigoId?: number;
  gramagemCru?: number;
  gramagemFinal?: number;
  larguraCru?: number;
  larguraFinal?: number;
  processoProducaoId?: number;
  lugarArmazem?: string;
  observacoes?: string;
  quantidade?: number;
  unidade?: EncomendaArtigoUnidade;
  fases?: EncomendaArtigoFasesOperations;
};

export type EncomendaArtigoFasesOperations = {
  add: CreateEncomendaArtigoFaseRequest[];
  update: UpdateEncomendaArtigoFaseRequest[];
  deleteIds: number[];
};

export type UpdateEncomendaArtigoFaseRequest = {
  id: number;
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria?: boolean;
  observacoes?: string;
};
