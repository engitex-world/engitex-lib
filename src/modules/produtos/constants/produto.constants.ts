import { GrupoCorantes, ProdutoTipo } from '../enums/produto.enum';

export const ProdutoTipoPrefixo = {
  [ProdutoTipo.COLORANT]: 'C',
  [ProdutoTipo.AUXILIARY]: 'A',
  [ProdutoTipo.FINISHING]: 'F',
  //[ProductType.BASIC]: 'B',
};

export const GrupoCorantesPrefixo: Record<GrupoCorantes, string> = {
  [GrupoCorantes.REACTIVE]: 'RE',
  [GrupoCorantes.ACID]: 'AC',
  [GrupoCorantes.DIRECT]: 'DI',
  [GrupoCorantes.DISPERSE]: 'DP',
  [GrupoCorantes.CUBA]: 'CU',
  [GrupoCorantes.CATIONIC]: 'CA',
  [GrupoCorantes.OPTICAL]: 'OT',
  [GrupoCorantes.SULFUROUS]: 'SU',
  [GrupoCorantes.NATURAL]: 'NA',
  [GrupoCorantes.PIGMENT]: 'PG',
  [GrupoCorantes.BASIC]: 'BA',
};
