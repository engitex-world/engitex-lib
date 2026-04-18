import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type GetEmpresasRequest = {
  pesquisa?: string;
  relacao?: EmpresaRelacao;
};
