import { LocaleType } from '@lib/common/enums/locale.enum';
import { AuditEntity } from '@lib/common/types/audit-entity.type';

export type Organizacao = {
  id: number;
  nome: string;
  subDominio: string;
  website: string;
  pais: string;
  codigoPostal: string;
  morada: string;
  cidade: string;
  email: string;
  nif: number;
  telefone: string;
  idioma: LocaleType;
};

export type OrganizacaoConfig = {
  id: number;
  contexto: string;
  valor: string;
} & AuditEntity;
