import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { FaseExecucaoEstado } from '../enums';

// ============================================================================
// RESPONSE TYPES
// ============================================================================

/**
 * Contagem de fases por estado para uma máquina
 */
export type MaquinaFasesContagem = {
  [key in FaseExecucaoEstado]?: number;
};

/**
 * Informação resumida sobre a fase em execução
 */
export type FaseEmExecucaoInfo = {
  encomendaNumero: string;
  cliente: string;
  artigoNome: string;
  faseNome: string;
};

/**
 * Card de overview de uma máquina individual
 */
export type MaquinaOverviewCard = {
  id: number;
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  totalFasesPlaneadas: number;
  contagemPorEstado: MaquinaFasesContagem;
  faseEmExecucao?: FaseEmExecucaoInfo;
};

/**
 * Grupo de máquinas por tipo
 */
export type MaquinaGrupoOverview = {
  grupo: MaquinaGrupo;
  maquinas: MaquinaOverviewCard[];
  totalFases: number;
  totalEmExecucao: number;
};

/**
 * Resposta completa da vista geral
 */
export type VistaGeralMaquinasResponse = {
  grupos: MaquinaGrupoOverview[];
  totais: {
    maquinas: number;
    fasesPlaneadas: number;
    fasesEmExecucao: number;
  };
};
