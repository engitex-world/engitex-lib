export type ProdutoAlertaItem = {
  severity: 'high' | 'medium' | 'low';
  descricao: string;
};

export type ProdutoAlertas = {
  fichaTecnica: ProdutoAlertaItem | null;
  fichaSeguranca: ProdutoAlertaItem | null;
  gotsApprovalLetter: ProdutoAlertaItem | null;
};
