import { PedidoCorAmostra } from '../types';

import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums';
import { Produto } from '@lib/modules/produtos/types';

export type GetAmostraPedidoCorRequest = {
  amostraId?: string;
};

export type PedidoCorAmostraResponse = PedidoCorAmostra & {
  ensaiosTable: AmostraEnsaiosTableDto;
};

type AmostraEnsaiosTableDto = {
  ensaios: EnsaioTabelaDto[];
  processos: ProcessoTabelaDto[];
};

type EnsaioTabelaDto = {
  id: number;
  numeroEnsaio: number;
};

type ProcessoTabelaDto = {
  id: number;
  nome: string;
  ordem: number;
  produtos: ProdutoTabelaDto[];
};

type ProdutoTabelaDto = Produto & {
  unidade: ProdutoReceitaLaboratorioUnidade;
  quantidadesPorEnsaio: Record<number, string>; // ensaioId -> quantidade
};
