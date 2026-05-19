import { GrupoCorantes, ProdutoTipo } from '../enums/produto.enum';
import { Produto, ProdutoDocumentoTipo } from '../types';

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

export type ProdutoDocumentoItem = {
  label: string;
  data?: Date;
  tipo: ProdutoDocumentoTipo;
};

export const getProdutoDocumentosType = (produto: Produto): ProdutoDocumentoItem[] => {
  return [
    {
      label: 'ficha-tecnica',
      data: produto.fichaTecnicaData,
      tipo: 'ficha-tecnica',
    },
    {
      label: 'ficha-seguranca',
      data: produto.fichaSegurancaData,
      tipo: 'ficha-seguranca',
    },
    {
      label: 'carta-aprovacao-gots',
      data: produto.cartaAprovacaoGotsData,
      tipo: 'carta-aprovacao-gots',
    },
  ];
};
