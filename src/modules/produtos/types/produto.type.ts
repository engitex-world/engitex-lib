import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { Empresa } from '@lib/modules/empresas/types';
import {
  Certificacao,
  FrasesSeguranca,
  ProdutoClassificacaoIonica,
  ProdutoSubTipo,
  ProdutoTipo,
} from '@lib/modules/produtos/enums';

export type Produto = {
  id: number;
  codigo: string;
  nome: string;
  nomeComercial: string;
  rgb?: string;
  tipo: ProdutoTipo;
  subTipos: ProdutoSubTipo[];
  classificacaoIonica?: ProdutoClassificacaoIonica;
  fabricante?: string;
  numZdhc?: string;
  numZdhcExpiraEm?: Date;
  numEinecs?: string;
  numCas?: string;
  certificacoes?: Certificacao[];
  frasesSeguranca?: FrasesSeguranca[];
  fornecedores: ProdutoFornecedor[];
  fichaTecnicaData?: Date;
  fichaSegurancaData?: Date;
  cartaAprovacaoGotsData?: Date;
} & AuditEntity;

export type ProdutoFornecedor = {
  id: number;
  produto: Produto;
  fornecedor: Empresa;
  preco: number;
  historicoPreco: HistoricoPrecoFornecedor[];
};

export interface HistoricoPrecoFornecedor {
  preco: number;
  data: Date;
}

export type ProdutoDocumentoTipo = 'ficha-tecnica' | 'ficha-seguranca' | 'carta-aprovacao-gots';
