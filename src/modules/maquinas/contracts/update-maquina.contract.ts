import { Maquina } from '@lib/modules/maquinas/types';

import { CreateMaquinaRequest } from './create-maquina.contract';

export type UpdateMaquinaRequest = Partial<CreateMaquinaRequest>;

export type UpdateMaquinaResponse = Maquina;

export type InactivateMaquinaResponse = { success: boolean };
