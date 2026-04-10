import { Artigo } from '../../../artigos/types';
import { CadernoEncargos } from '../../../controlo-qualidade/types';
import { Cor } from '../../../cores/types';
import { Empresa } from '../../../empresas/types';
import { Produto } from '../../../produtos/types';

import { LabDip } from './lab-dip.type';

import { Common } from '@lib/common/types/base-entity.type';
import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';
import { PedidoCorEstado } from '@lib/modules/laboratorio/pedidos-cor/enums/pedido-cor.enum';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';
import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums/produto.enum';
import { PreparacaoTingimento } from '@lib/modules/tinturaria/processos-tingimento/enums';
import { ProcessoTingimento } from '@lib/modules/tinturaria/processos-tingimento/types';

export type PedidoCor = {
  cliente: Empresa;
  artigo: Artigo;
  referenciaPedido?: string;
  artigoGramagem?: number;
  certificacoes?: Certificacao[];
  cadernoEncargos?: CadernoEncargos;
  amostras: PedidoCorAmostra[];
  dataEntregaPrevista?: Date;
  estado: PedidoCorEstado;
  observacoes?: string;
} & Common;

export type PedidoCorAmostra = {
  id: number;
  pedidoCor: PedidoCor;
  cor: Cor;
  artigo: Artigo;
  cliente: Empresa;
  codigoCor: string;
  codigoCorCliente?: string;
  certificacoes?: Certificacao[];
  cadernoEncargos?: CadernoEncargos;
  preparacaoTingimento?: PreparacaoTingimento;
  processosTingimento: ProcessoTingimentoAmostra[];
  ensaios: EnsaioAmostra[];
};

export type ProcessoTingimentoAmostra = {
  id: number;
  processoTingimento: ProcessoTingimento;
  fibras: ArtigoFibra[];
  ordem: number;
  pesoAmostra: number;
  quantidadeBanho: number;
  relacaoBanho: number;
  produtos: ProdutoProcessoEnsaio[];
};

export type EnsaioAmostra = {
  id: number;
  pedidoCorAmostraId: number;
  numeroEnsaio: number;
  labDip?: LabDip;
};

export type ProdutoProcessoEnsaio = {
  id: number;
  processoTingimentoAmostra: ProcessoTingimentoAmostra;
  produto: Produto;
  unidade: ProdutoReceitaLaboratorioUnidade;
  quantidadesPorEnsaio: Record<number, number>;
};
