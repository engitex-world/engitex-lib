import { PedidoCorAmostra } from '../types';

import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums';
import { Produto } from '@lib/modules/produtos/types';

export type GetAmostraPedidoCorRequest = {
  amostraId?: string;
};

export type GetAmostraPedidoCorResponse = PedidoCorAmostra & {
  ensaiosTable: AmostraEnsaiosTableDto;
};

export type AmostraEnsaiosTableDto = {
  ensaios: EnsaioTableDto[];
  processos: ProcessoTableDto[];
};

type EnsaioTableDto = {
  id: number;
  numeroEnsaio: number;
};

export type ProcessoTableDto = {
  id: number;
  nome: string;
  ordem: number;
  produtos: ProdutoTableDto[];
};

export type ProdutoTableDto = Produto & {
  unidade: ProdutoReceitaLaboratorioUnidade;
  quantidadesPorEnsaio: Record<number, string>; // ensaioId -> quantidade
};
