import { Pais } from '@lib/common/enums';
import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type CreateEmpresaContactoContract = {
  id?: number;
  nome: string;
  funcao?: UtilizadorFuncao;
  email: string;
  telemovel: string;
};

export type CreateEmpresaContract = {
  id?: number;
  nome: string;
  relacao: EmpresaRelacao[];
  pais: Pais;
  codigoPostal: string;
  morada: string;
  cidade: string;
  nif: string;
  contactos: CreateEmpresaContactoContract[];
};
