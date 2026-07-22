import { NormaQualidadeTipoResultado, NormaQualidadeUnidade } from '../enums';

export type NormaQualidade = {
  id: number;
  nome: string;
  codigo: string;
  descricao: string;
  tipoResultado: NormaQualidadeTipoResultado;
  unidade: NormaQualidadeUnidade;
};
