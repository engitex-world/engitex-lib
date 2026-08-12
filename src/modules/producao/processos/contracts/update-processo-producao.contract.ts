import { ProcessoProducao } from '@lib/modules/producao/processos/types';

import { CreateProcessoProducaoRequest } from './create-processo-producao.contract';

export type UpdateProcessoProducaoRequest = Partial<CreateProcessoProducaoRequest>;

export type UpdateProcessoProducaoResponse = Promise<ProcessoProducao>;

export type InactivateProcessoProducaoResponse = Promise<{ success: boolean }>;
