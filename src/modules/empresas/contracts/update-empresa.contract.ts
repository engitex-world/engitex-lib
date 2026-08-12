import { Empresa } from '@lib/modules/empresas/types';

import { CreateEmpresaRequest } from './create-empresa.contract';

export type UpdateEmpresaRequest = Partial<CreateEmpresaRequest>;

export type UpdateEmpresaResponse = Promise<Empresa>;
