import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums';

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
  tipo: string; // ProdutoTipo
  unidade: ProdutoReceitaLaboratorioUnidade; // Global unit
  quantidadesPorEnsaio: Record<string, number>; // Map<ensaioId, quantidade>
  action: 'update' | 'add' | 'remove';
}
