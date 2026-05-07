/**
 * Estados possíveis de uma fase de execução de um artigo de encomenda.
 * Usado para rastrear o progresso da fase desde pendente até concluída.
 */
export enum FaseExecucaoEstado {
  /** Fase ainda não planeada nem iniciada */
  PENDENTE = 'PENDENTE',
  /** Fase atribuída a uma máquina e com posição na fila */
  PLANEADA = 'PLANEADA',
  /** Operador iniciou a fase */
  EM_EXECUCAO = 'EM_EXECUCAO',
  /** Operador terminou a fase */
  CONCLUIDA = 'CONCLUIDA',
  /** Fase não pode avançar por algum motivo */
  BLOQUEADA = 'BLOQUEADA',
  /** Fase removida ou anulada */
  CANCELADA = 'CANCELADA',
}
