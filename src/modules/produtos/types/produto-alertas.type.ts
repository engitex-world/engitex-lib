export type ProdutoAlertas = {
  preco: ProdutoAlertaPrioridade;
  fichaTecnica: ProdutoAlertaPrioridade;
  fichaSeguranca: ProdutoAlertaPrioridade;
  gotsApprovalLetter: ProdutoAlertaPrioridade;
};

enum ProdutoAlertaPrioridade {
  NO_ALERT = 0,
  HIGH = 1,
  MEDIUM = 2,
}
