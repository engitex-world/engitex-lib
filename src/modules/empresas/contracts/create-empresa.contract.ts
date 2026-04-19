import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { Pais } from '@lib/modules/organizacao/enums';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type CreateEmpresaContactoRequest = {
  id?: number;
  nome: string;
  funcao?: UtilizadorFuncao;
  email?: string;
  telemovel?: string;
};

export type CreateEmpresaRequest = {
  id?: number;
  nome: string;
  relacao: EmpresaRelacao;
  pais: Pais;
  codigoPostal: string;
  morada: string;
  cidade: string;
  nif: string;
  ativo?: boolean;
  contactos?: CreateEmpresaContactoRequest[];
};
