import { NormaQualidade } from './norma-qualidade.type';

export type CadernoEncargosNorma = {
  normaQualidade: NormaQualidade;
  valorMin?: number;
  valorMax?: number;
  observacoes?: string;
};
