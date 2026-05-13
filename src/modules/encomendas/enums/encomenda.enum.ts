export enum EncomendaArtigoUnidade {
  PECA = 'PEÇAS',
  KG = 'KG',
}

export enum EncomendaEstado {
  AGUARDA_PLANEAMENTO = 'AGUARDA_PLANEAMENTO',
  PLANEADA = 'PLANEADA', // Pelo menos uma fase está planeada
  EM_PRODUCAO = 'EM_PRODUCAO', // Pelo menos uma fase está em execução
  PRODUCAO_CONCLUIDA = 'PRODUCAO_CONCLUIDA', // Todas as fases concluídas
  CONCLUIDA = 'CONCLUIDA', // Entrega feita
  CANCELADA = 'CANCELADA',
}
