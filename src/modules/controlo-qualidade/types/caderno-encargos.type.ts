import { Empresa } from '../../empresas/types';

import { Common } from '@lib/common/types/base-entity.type';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';

export type CadernoEncargos = {
  nome: string;
  cliente: Empresa;
  certificacoes?: Certificacao[];
} & Common;
