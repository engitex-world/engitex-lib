import { OrganizacaoConfigContexto } from '@lib/modules/organizacao/enums';

export type GetOrganizacaoConfigByContextoRequest = {
  contexto: OrganizacaoConfigContexto;
};

export type GetOrganizacaoConfigByContextoResponse = {
  id: number;
  valor: string;
};
