import { Common } from '@lib/common/types/base-entity.type';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';

import { Empresa } from '../../empresas/types';

import { CadernoEncargosNorma } from './caderno-encargos-norma.type';

export type CadernoEncargos = {
  nome: string;
  versao: number;
  cliente: Empresa;
  certificacoes?: Certificacao[];
  normas: CadernoEncargosNorma[];
} & Common;
