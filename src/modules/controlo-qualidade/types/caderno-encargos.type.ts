import { Common } from '@lib/common/types/base-entity.type';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';
import { Empresa } from '../../empresas/types';

export type CadernoEncargos = {
  nome: string;
  cliente: Empresa;
  certificacoes?: Certificacao[];
} & Common;
