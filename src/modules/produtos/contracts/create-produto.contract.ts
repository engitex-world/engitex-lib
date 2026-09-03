import {
  Certificacao,
  FrasesSeguranca,
  ProdutoClassificacaoIonica,
  ProdutoSubTipo,
  ProdutoTipo,
} from '../enums';

export type CreateProdutoFornecedorRequest = {
  id?: number;
  fornecedorId: number;
  produtoId?: number;
  preco: number;
};

export type CreateProdutoRequest = {
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
  fornecedores: CreateProdutoFornecedorRequest[];
  fichaTecnica?: string;
  fichaTecnicaData?: Date;
  fichaSeguranca?: string;
  fichaSegurancaData?: Date;
  cartaAprovacaoGots?: string;
  cartaAprovacaoGotsData?: Date;
  ativo?: boolean;
};
