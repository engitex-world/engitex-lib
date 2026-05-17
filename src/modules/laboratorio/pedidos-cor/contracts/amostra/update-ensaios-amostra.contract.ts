import { ProdutoReceitaLaboratorioUnidade, ProdutoTipo } from '@lib/modules/produtos/enums';

export interface UpdateEnsaiosAmostraRequest {
  processos: ProcessoUpdateDto[];
}

export interface ProcessoUpdateDto {
  processoId: number;
  produtos: ProdutoProcessoUpdateDto[];
}

export interface ProdutoProcessoUpdateDto {
  produtoId: number;
  nome: string;
  tipo: ProdutoTipo;
  unidade: ProdutoReceitaLaboratorioUnidade;
  quantidadesPorEnsaio: Record<string, number>; // Map<ensaioId, quantidade>
  action: 'update' | 'add' | 'remove';
}
