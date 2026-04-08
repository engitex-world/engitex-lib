import { Common } from '@lib/common/types/base-entity.type';
import { Empresa } from '@lib/modules/empresas/types';
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
  numZdhcExpiraEm?: Date;
  numEinecs?: string;
  numCas?: string;
  certificacoes?: Certificacao[];
  frasesSeguranca?: FrasesSeguranca[];
  fornecedores: ProdutoFornecedor[];
  fichaTecnica?: Buffer | string;
  fichaTecnicaData?: Date;
  fichaSeguranca?: Buffer | string;
  fichaSegurancaData?: Date;
  gotsApprovalLetter?: Buffer | string;
  gotsApprovalLetterData?: Date;
} & Common;

export type ProdutoFornecedor = {
  id: number;
  produto: Produto;
  fornecedor: Empresa;
  preco: number;
  historicoPreco: HistoricoPrecoFornecedor[];
};

interface HistoricoPrecoFornecedor {
  preco: number;
  data: Date;
}
