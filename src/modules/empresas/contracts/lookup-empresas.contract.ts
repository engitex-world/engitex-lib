import { LookupOption } from '@lib/common/types';
import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type LookupEmpresasRequest = {
  relacao?: EmpresaRelacao;
};

type EmpresaLookup = LookupOption;

export type LookupEmpresasResponse = EmpresaLookup[];
