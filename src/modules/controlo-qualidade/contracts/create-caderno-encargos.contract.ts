import { Certificacao } from '@lib/modules/produtos/enums';

import { CadernoEncargosNormaRegra, NormaQualidadeCampoReferencia } from '../enums';
import { CadernoEncargos } from '../types';

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

export type CreateCadernoEncargosResponse = Promise<CadernoEncargos>;
