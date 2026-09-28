import { AuditEntity } from '@lib/common/types';
import { OrganizacaoConfigContexto } from '@lib/modules/organizacao/enums';

export type OrganizacaoConfig = {
  id: number;
  contexto: OrganizacaoConfigContexto;
  valor: string;
} & AuditEntity;
