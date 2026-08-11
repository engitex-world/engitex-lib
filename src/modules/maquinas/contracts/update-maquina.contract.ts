import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { Maquina } from '@lib/modules/maquinas/types';

import { CreateMaquinaRequest } from './create-maquina.contract';

export type UpdateMaquinaRequest = Partial<CreateMaquinaRequest>;

export type UpdateMaquinaResponse = ServerActionResult<Maquina, ResponseError>;

export type InactivateMaquinaResponse = ServerActionResult<{ success: boolean }, ResponseError>;
