import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { Empresa } from '@lib/modules/empresas/types';

import { CreateEmpresaRequest } from './create-empresa.contract';

export type UpdateEmpresaRequest = Partial<CreateEmpresaRequest>;

export type UpdateEmpresaResponse = ServerActionResult<Empresa, ResponseError>;
