import { OrganizacaoConfigContexto } from '@lib/modules/organizacao/enums';

export type UpdateOrganizacaoConfigRequest = {
  contexto: OrganizacaoConfigContexto;
  valor: string;
};
