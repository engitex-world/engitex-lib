import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { EmpresaRelacao } from '@lib/modules/empresas/enums/empresa.enum';
import { Pais } from '@lib/modules/organizacao/enums/pais.enum';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums/utilizador.enum';

import { Utilizador } from '../../utilizadores/types';

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
  gestor?: Utilizador;
  contactos: EmpresaContacto[];
} & AuditEntity;

export type EmpresaContacto = {
  id: number;
  nome: string;
  funcao?: UtilizadorFuncao;
  email?: string;
  telemovel?: string;
};
