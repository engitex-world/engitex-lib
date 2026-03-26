import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';
import { ArtigoEstrutura } from '../enums/artigo-estrutura.enum';

export type Artigo = {
  nome: string;
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao;
};

export type ArtigoComposicao = {
  fibra: ArtigoFibra;
  percentagem: number;
};
