export type ProdutoAlertas = {
  preco: ProdutoAlertaPrioridade;
  fichaTecnica: ProdutoAlertaPrioridade;
  fichaSeguranca: ProdutoAlertaPrioridade;
  gotsApprovalLetter: ProdutoAlertaPrioridade;
};

enum ProdutoAlertaPrioridade {
  HIGH = 1,
  MEDIUM = 2,
  NO_ALERT = 0,
}
