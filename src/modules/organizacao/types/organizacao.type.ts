import { LocaleType } from '@lib/common/enums/locale.enum';
import { Common } from '@lib/common/types/base-entity.type';

export type Organizacao = {
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
  contexto: string;
  valor: string;
} & Common;
