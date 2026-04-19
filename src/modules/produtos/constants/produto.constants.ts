import { GrupoCorantes, ProdutoTipo } from '../enums/produto.enum';

export const ProdutoTipoPrefixo = {
  [ProdutoTipo.CORANTE]: 'C',
  [ProdutoTipo.AUXILIAR]: 'A',
  [ProdutoTipo.ACABAMENTO]: 'F',
  [ProdutoTipo.BASE]: 'B',
};

export const GrupoCorantesPrefixo: Record<GrupoCorantes, string> = {
  [GrupoCorantes.REATIVO]: 'RE',
  [GrupoCorantes.ACIDO]: 'AC',
  [GrupoCorantes.DIRETO]: 'DI',
  [GrupoCorantes.DISPERSO]: 'DP',
  [GrupoCorantes.CUBA]: 'CU',
  [GrupoCorantes.CATIONICO]: 'CA',
  [GrupoCorantes.OTICO]: 'OT',
  [GrupoCorantes.SULFUROSO]: 'SU',
  [GrupoCorantes.NATURAL]: 'NA',
  [GrupoCorantes.PIGMENTO]: 'PG',
  [GrupoCorantes.BASICO]: 'BA',
};
