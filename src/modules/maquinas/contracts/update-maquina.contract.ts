import { Maquina } from '@lib/modules/maquinas/types';

import { CreateMaquinaRequest } from './create-maquina.contract';

export type UpdateMaquinaRequest = Partial<CreateMaquinaRequest>;

export type UpdateMaquinaResponse = Promise<Maquina>;

export type InactivateMaquinaResponse = Promise<{ success: boolean }>;
