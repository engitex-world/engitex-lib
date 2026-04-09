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
  quantidade: string;
  unidade: string;
}

export interface AddProdutoAFormulaDto {
  formulaId: number;
  produtoId: number;
  quantidade?: string;
  unidade?: string;
}

export interface RemoverProdutoFormulaDto {
  formulaId: number;
  produtoFormulaId: number;
}
