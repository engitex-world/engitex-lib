import { CadernoEncargosNormaRegra, NormaQualidadeCampoReferencia } from '../enums';

import { NormaQualidade } from './norma-qualidade.type';

export type CadernoEncargosNorma = {
  id: number;
  normaQualidade: NormaQualidade;
  regra: CadernoEncargosNormaRegra;
  valorMinimo?: number;
  valorMaximo?: number;
  campoReferencia?: NormaQualidadeCampoReferencia;
  observacoes?: string;
};
