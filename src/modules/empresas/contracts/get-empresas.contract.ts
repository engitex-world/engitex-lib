import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type GetEmpresasFilterRequest = {
  pesquisa?: string;
  relacao?: EmpresaRelacao;
};
