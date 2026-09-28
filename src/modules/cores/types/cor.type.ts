import { CorTom } from '@lib/modules/cores/enums';

export type Cor = {
  id: number;
  codigo: string;
  rgbHex: string;
  pantone?: string;
  tom: CorTom;
  oklabL: number;
  oklabA: number;
  oklabB: number;
};
