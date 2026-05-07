export enum EncomendaArtigoUnidade {
  PECA = 'PEÇAS',
  KG = 'KG',
}

export enum EncomendaEstado {
  /** Encomenda criada, fases ainda pendentes */
  PENDENTE = 'PENDENTE',
  /** Encomenda criada, produção iniciada no ERP antigo */
  INICIADA = 'INICIADA',
  /** Pelo menos uma fase está planeada */
  PLANEADA = 'PLANEADA',
  /** Pelo menos uma fase está em execução */
  EM_PRODUCAO = 'EM_PRODUCAO',
  /** Todas as fases concluídas */
  PRODUCAO_CONCLUIDA = 'PRODUCAO_CONCLUIDA',
  /** Encomenda concluída (entrega feita) */
  CONCLUIDA = 'CONCLUIDA',
  /** Encomenda cancelada */
  CANCELADA = 'CANCELADA',
}
