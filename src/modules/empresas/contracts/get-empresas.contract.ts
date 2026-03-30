import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type GetEmpresasFilterContract = {
  pesquisa?: string;
  relacao?: EmpresaRelacao;
};
