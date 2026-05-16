import { Common } from '@lib/common/types/base-entity.type';
import { Artigo } from '@lib/modules/artigos/types';
import { CadernoEncargos } from '@lib/modules/controlo-qualidade/types/caderno-encargos.type';
import { Cor } from '@lib/modules/cores/types';
import { Empresa } from '@lib/modules/empresas/types';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Maquina } from '@lib/modules/maquinas/types';
import { ProcessoProducao } from '@lib/modules/producao/processos-producao/types';
import { Certificacao } from '@lib/modules/produtos/enums';

import {
  EncomendaArtigoFaseEstado,
  EncomendaArtigoUnidade,
  EncomendaEstado,
} from '../enums/encomenda.enum';

export type Encomenda = {
  numeroEncomenda: string;
  cliente: Empresa;
  cor?: Cor;
  codigoCor: string;
  cadernoEncargos?: CadernoEncargos;
  certificacoes?: Certificacao[];
  artigos: EncomendaArtigo[];
  observacoes?: string;
  isDevolucao: boolean;
  encomendaAnterior?: Encomenda;
  estado: EncomendaEstado;
  dataEntregaPrevista?: Date;
} & Common;

export type EncomendaArtigo = {
  id: number;
  ordemServico: string;
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

export type EncomendaArtigoFase = {
  id: number;
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria: boolean;
  estado: EncomendaArtigoFaseEstado;
  observacoesPlaneamento?: string;
  observacoesOperario: FaseObservacaoOperario[];
  dataInicioReal?: Date;
  utilizadorInicio?: string;
  dataFimReal?: Date;
  utilizadorFim?: string;
  maquinaExecutada?: Maquina;
};

export type FaseObservacaoOperario = {
  data: Date;
  utilizador: string;
  observacao: string;
};
