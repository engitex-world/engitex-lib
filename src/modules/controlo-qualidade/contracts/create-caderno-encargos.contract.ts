import { Certificacao } from '@lib/modules/produtos/enums';

import { CadernoEncargosNormaRegra, NormaQualidadeCampoReferencia } from '../enums';

export type CreateCadernoEncargosNormaRequest = {
  normaQualidadeId: number;
  regra: CadernoEncargosNormaRegra;
  valorMinimo?: number;
  valorMaximo?: number;
  campoReferencia?: NormaQualidadeCampoReferencia;
  observacoes?: string;
};

export type CreateCadernoEncargosRequest = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
  normas: CreateCadernoEncargosNormaRequest[];
};
