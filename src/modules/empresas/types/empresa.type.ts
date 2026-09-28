import { AuditEntity } from '@lib/common/types';
import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { Pais } from '@lib/modules/organizacao/enums';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type Empresa = {
  id: number;
  nome: string;
  sigla: string;
  relacao: EmpresaRelacao;
  pais: Pais;
  codigoPostal: string;
  morada: string;
  cidade: string;
  nif: string;
  contactos: EmpresaContacto[];
} & AuditEntity;

export type EmpresaContacto = {
  id: number;
  nome: string;
  funcao?: UtilizadorFuncao;
  email?: string;
  telemovel?: string;
};
