import { OrganizacaoConfigContexto } from '@lib/modules/organizacao/enums';

export type CreateOrganizacaoConfigRequest = {
  contexto: OrganizacaoConfigContexto;
  valor: string;
};
