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
  key: string;
  tipo: ProdutoDocumentoTipo;
  data?: Date;
};

export const getProdutoDocumentosType = (produto: Produto): ProdutoDocumentoItem[] => {
  return [
    {
      key: 'fichaTecnica',
      tipo: 'ficha-tecnica',
      data: produto.fichaTecnicaData,
    },
    {
      key: 'fichaSeguranca',
      tipo: 'ficha-seguranca',
      data: produto.fichaSegurancaData,
    },
    {
      key: 'cartaAprovacaoGots',
      tipo: 'carta-aprovacao-gots',
      data: produto.cartaAprovacaoGotsData,
    },
  ];
};
