import { ArtigoEstrutura, ArtigoFibra } from '@lib/modules/artigos/enums';

export type LookupMalhasCruComposicaoFilter = {
  fibra: ArtigoFibra;
  percentagem: number;
};

export type LookupMalhasCruRequest = {
  estrutura?: ArtigoEstrutura;
  composicao?: LookupMalhasCruComposicaoFilter[];
};
