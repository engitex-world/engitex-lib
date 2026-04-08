import { Utilizador } from '../../utilizadores/types';

import { Pais } from '@lib/common/enums/pais.enum';
import { Common } from '@lib/common/types/base-entity.type';
import { EmpresaRelacao } from '@lib/modules/empresas/enums/empresa.enum';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums/utilizador.enum';

export type Empresa = {
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
} & Common;

export type EmpresaContacto = {
  id: number;
  nome: string;
  funcao?: UtilizadorFuncao;
  email: string;
  telemovel?: string;
};
