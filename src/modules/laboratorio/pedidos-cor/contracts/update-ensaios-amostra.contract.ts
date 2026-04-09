import { ProdutoReceitaLaboratorioUnidade } from '@lib/modules/produtos/enums';

export interface UpdateEnsaiosAmostraRequest {
  ensaios: EnsaioUpdateDto[];
}

export interface EnsaioUpdateDto {
  id: number;
  formulas: FormulaUpdateDto[];
}

export interface FormulaUpdateDto {
  id: number;
  produtos: ProdutoFormulaUpdateDto[];
}

export interface ProdutoFormulaUpdateDto {
  id: number;
  quantidade: number;
  unidade: ProdutoReceitaLaboratorioUnidade;
}

export interface AddProdutoAFormulaDto {
  formulaId: number;
  produtoId: number;
  quantidade?: number;
  unidade?: ProdutoReceitaLaboratorioUnidade;
}

export interface RemoverProdutoFormulaDto {
  formulaId: number;
  produtoFormulaId: number;
}
