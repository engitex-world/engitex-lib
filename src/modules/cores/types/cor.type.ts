import { CorIntensidade, CorTom } from '@lib/modules/cores/enums/cor.enum';

export type Cor = {
  id: number;
  codigo: string;
  rgbHex: string;
  pantone?: string;
  tom: CorTom;
  intensidade: CorIntensidade;
};
