import { CorIntensidade, CorTom } from '../enums/cor.enum';

export const PANTONE_LENGTH = 11;

export const CorTomCodigo: CorTomCodigo = {
  [CorTom.VERMELHO]: { pt: 'VM', en: 'RD', es: 'RJ' },
  [CorTom.LARANJA]: { pt: 'LR', en: 'OR', es: 'NA' },
  [CorTom.AMARELO]: { pt: 'AM', en: 'YE', es: 'AM' },
  [CorTom.VERDE]: { pt: 'VD', en: 'GR', es: 'VD' },
  [CorTom.AZUL]: { pt: 'AZ', en: 'BL', es: 'AZ' },
  [CorTom.ROXO]: { pt: 'RX', en: 'PU', es: 'PU' },
  [CorTom.ROSA]: { pt: 'RS', en: 'PK', es: 'RS' },
  [CorTom.CASTANHO]: { pt: 'CT', en: 'BR', es: 'MR' },
  [CorTom.PRETO]: { pt: 'PR', en: 'BL', es: 'NG' },
  [CorTom.BRANCO]: { pt: 'BR', en: 'WH', es: 'BL' },
  [CorTom.CINZA]: { pt: 'CZ', en: 'GY', es: 'GR' },
};

export const CorIntensidadeCodigo: CorIntensidadeCodigo = {
  [CorIntensidade.CLARA]: { pt: 'C', en: 'L', es: 'C' },
  [CorIntensidade.MEDIA]: { pt: 'M', en: 'M', es: 'M' },
  [CorIntensidade.ESCURA]: { pt: 'E', en: 'D', es: 'E' },
  [CorIntensidade.FLUOR]: { pt: 'F', en: 'F', es: 'F' },
};

type CorTomCodigo = {
  [K in CorTom]: Record<string, string>;
};

type CorIntensidadeCodigo = {
  [K in CorIntensidade]: Record<string, string>;
};
