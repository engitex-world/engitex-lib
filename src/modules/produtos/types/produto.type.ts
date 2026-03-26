import { Common } from '@lib/common/types/base-entity.type';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';
import { FrasesSeguranca } from '@lib/modules/produtos/enums/frases-seguranca.enum';
import {
  ProdutoClassificacaoIonica,
  ProdutoSubTipo,
  ProdutoTipo,
} from '@lib/modules/produtos/enums/produto.enum';

export type Produto = {
  codigo: string;
  nome: string;
  nomeComercial: string;
  rgb?: string;
  tipo: ProdutoTipo;
  subTipos: ProdutoSubTipo[];
  classificacaoIonica?: ProdutoClassificacaoIonica;
  fabricante?: string;
  numZdhc?: string;
  zdhcExpiraEm?: Date;
  numEinecs?: string;
  numCas?: string;
  certificacoes?: Certificacao[];
  frasesSeguranca?: FrasesSeguranca[];
  fichaTecnica?: Buffer | string;
  fichaTecnicaData?: Date;
  fichaSeguranca?: Buffer | string;
  fichaSegurancaData?: Date;
  gotsApprovalLetter?: Buffer | string;
  gotsApprovalLetterData?: Date;
  fornecedores: ProdutoFornecedor[];
} & Common;

export type ProdutoFornecedor = {
  produtoId: number;
  fornecedorId: number;
  preco: number;
  historicoPreco: HistoricoPrecoFornecedor[];
};

interface HistoricoPrecoFornecedor {
  preco: number;
  data: Date;
}
