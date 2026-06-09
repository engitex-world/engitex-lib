import { Paginated } from '@lib/common/types/table.type';
import { EmpresaRelacao } from '@lib/modules/empresas/enums';

import { Empresa } from '../types';

export type GetEmpresasRequest = {
  pesquisa?: string;
  relacao?: EmpresaRelacao;
};

export type GetEmpresasResponse = Promise<Paginated<Empresa>>;
