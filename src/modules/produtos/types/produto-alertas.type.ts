export type ProdutoAlertaItem = {
  severity: 'high' | 'medium' | 'low';
  descricao: string;
};

export type ProdutoAlertas = {
  preco: ProdutoAlertaItem | null;
  fichaTecnica: ProdutoAlertaItem | null;
  fichaSeguranca: ProdutoAlertaItem | null;
  gotsApprovalLetter: ProdutoAlertaItem | null;
};
