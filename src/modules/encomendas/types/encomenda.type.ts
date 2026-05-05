import { Common } from '@lib/common/types/base-entity.type';
import { Artigo } from '@lib/modules/artigos/types';
import { Empresa } from '@lib/modules/empresas/types';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { ProcessoProducaoFaseEstado } from '@lib/modules/processos-producao/enums';
import { ProcessoProducao } from '@lib/modules/processos-producao/types';
import { Certificacao } from '@lib/modules/produtos/enums';

import { EncomendaArtigoUnidade, EncomendaEstado } from '../enums/encomenda.enum';

export type EncomendaArtigoFase = {
  id: number;
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria: boolean;
  observacoes?: string;
  status?: ProcessoProducaoFaseEstado;
};

export type EncomendaArtigo = {
  id: number;
  artigo: Artigo;
  gramagemCru?: number;
  gramagemFinal: number;
  larguraCru?: number;
  larguraFinal: number;
  processoProducao: ProcessoProducao;
  lugarArmazem?: string;
  observacoes?: string;
  quantidade: number;
  unidade: EncomendaArtigoUnidade;
  fases: EncomendaArtigoFase[];
};

export type Encomenda = {
  numeroEncomenda: string;
  cliente: Empresa;
  codigoCor: string;
  certificacoes?: Certificacao[];
  artigos: EncomendaArtigo[];
  observacoes?: string;
  isDevolucao: boolean;
  encomendaAnterior?: Encomenda;
  estado: EncomendaEstado;
  dataEntregaPrevista?: Date;
} & Common;
