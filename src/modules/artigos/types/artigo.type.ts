import { ArtigoEstrutura } from '../enums/artigo-estrutura.enum';

import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';

export type Artigo = {
  id: number;
  nome: string;
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
};

export type ArtigoComposicao = {
  fibra: ArtigoFibra;
  percentagem: number;
};
