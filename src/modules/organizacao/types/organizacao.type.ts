import { LocaleType } from '@lib/common/enums';
import { Pais } from '@lib/modules/organizacao/enums';

export type Organizacao = {
  id: number;
  nome: string;
  subDominio: string;
  website: string;
  pais: Pais;
  codigoPostal: string;
  morada: string;
  cidade: string;
  email: string;
  nif: number;
  telefone: string;
  idioma: LocaleType;
};
