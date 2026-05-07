export enum FaseExecucaoEstado {
  PENDENTE = 'PENDENTE',
  PLANEADA = 'PLANEADA',
  EM_EXECUCAO = 'EM_EXECUCAO',
  CONCLUIDA = 'CONCLUIDA',
  BLOQUEADA = 'BLOQUEADA',
  CANCELADA = 'CANCELADA',
}

export enum FaseProntidaoEstado {
  VERDE = 'VERDE', // Fase pronta a ser executada
  AMARELO = 'AMARELO', // 1 fase anterior pendente
  VERMELHO = 'VERMELHO', // 2+ fases anteriores pendentes
  CINZA = 'CINZA', // Fase cancelada, bloqueada ou sem dados suficientes
}
