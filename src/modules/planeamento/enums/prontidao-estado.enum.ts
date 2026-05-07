/**
 * Estados do semáforo de prontidão para execução de uma fase.
 * Calculado no backend com base nas fases anteriores.
 */
export enum ProntidaoEstado {
  /** Todas as fases anteriores concluídas - PODE EXECUTAR */
  VERDE = 'VERDE',
  /** 1 fase anterior pendente ou em execução - ALERTA SUAVE */
  AMARELO = 'AMARELO',
  /** 2+ fases anteriores pendentes - ALERTA FORTE */
  VERMELHO = 'VERMELHO',
  /** Fase cancelada, bloqueada ou sem dados suficientes - INDISPONÍVEL */
  CINZA = 'CINZA',
}
