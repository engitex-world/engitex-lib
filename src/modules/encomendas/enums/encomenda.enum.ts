export enum EncomendaEstado {
  INICIADA = 'INICIADA',
  EM_PRODUCAO = 'EM_PRODUCAO',
  PRONTA_PARA_ENTREGA = 'PRONTA_PARA_ENTREGA',
  PARCIALMENTE_ENTREGUE = 'PARCIALMENTE_ENTREGUE', // Pelo menos um artigo entregue, mas não todos
  ENTREGUE = 'ENTREGUE', // Todos os artigos entregues
}

export enum EncomendaArtigoUnidade {
  PECA = 'PEÇAS',
  KG = 'KG',
}

export enum EncomendaArtigoFaseEstado {
  AGUARDA_PLANEAMENTO = 'AGUARDA_PLANEAMENTO',
  PLANEADA = 'PLANEADA',
  EM_EXECUCAO = 'EM_EXECUCAO',
  CONCLUIDA = 'CONCLUIDA',
  CANCELADA = 'CANCELADA',
  BLOQUEADA = 'BLOQUEADA',
}
