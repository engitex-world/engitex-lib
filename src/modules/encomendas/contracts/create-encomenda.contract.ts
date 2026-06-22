import { ArtigoUnidade } from '@lib/modules/artigos/enums';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaEstado } from '../enums';

export type CreateEncomendaRequest = {
  numeroEncomenda: string;
  clienteId: number;
  codigoCor: string;
  corId?: number;
  cadernoEncargosId?: number;
  certificacoes?: Certificacao[];
  isDevolucao?: boolean;
  encomendaAnteriorId?: number;
  observacoes?: string;
  estado?: EncomendaEstado;
  dataEntregaPrevista?: Date;
  artigos: CreateEncomendaArtigoRequest[];
};

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
  unidade: ArtigoUnidade;
  fases: CreateEncomendaArtigoFaseRequest[];
};

export type CreateEncomendaArtigoFaseRequest = {
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria?: boolean;
  observacoes?: string;
};
