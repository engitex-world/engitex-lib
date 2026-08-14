import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';

import { Empresa } from '../../empresas/types';

import { CadernoEncargosNorma } from './caderno-encargos-norma.type';

export type CadernoEncargos = {
  id: number;
  nome: string;
  versao: number;
  cliente: Empresa;
  certificacoes?: Certificacao[];
  normas: CadernoEncargosNorma[];
} & AuditEntity;
