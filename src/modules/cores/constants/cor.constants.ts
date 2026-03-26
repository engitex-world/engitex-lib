import { CorIntensidade, CorTom } from '../enums/cor.enum';

export const CorTomCodigo: CorTomCodigo = {
  [CorTom.RED]: { pt: 'VM', en: 'RD', es: 'RJ' },
  [CorTom.ORANGE]: { pt: 'LR', en: 'OR', es: 'NA' },
  [CorTom.YELLOW]: { pt: 'AM', en: 'YE', es: 'AM' },
  [CorTom.GREEN]: { pt: 'VD', en: 'GR', es: 'VD' },
  [CorTom.BLUE]: { pt: 'AZ', en: 'BL', es: 'AZ' },
  [CorTom.PURPLE]: { pt: 'RX', en: 'PU', es: 'PU' },
  [CorTom.PINK]: { pt: 'RS', en: 'PK', es: 'RS' },
  [CorTom.BROWN]: { pt: 'CT', en: 'BR', es: 'MR' },
  [CorTom.BLACK]: { pt: 'PR', en: 'BL', es: 'NG' },
  [CorTom.WHITE]: { pt: 'BR', en: 'WH', es: 'BL' },
  [CorTom.GRAY]: { pt: 'CZ', en: 'GY', es: 'GR' },
};

export const CorIntensidadeCodigo: CorIntensidadeCodigo = {
  [CorIntensidade.LIGHT]: { pt: 'C', en: 'L', es: 'C' },
  [CorIntensidade.MEDIUM]: { pt: 'M', en: 'M', es: 'M' },
  [CorIntensidade.DARK]: { pt: 'E', en: 'D', es: 'E' },
  [CorIntensidade.FLUOR]: { pt: 'F', en: 'F', es: 'F' },
};

type CorTomCodigo = {
  [K in CorTom]: Record<string, string>;
};

type CorIntensidadeCodigo = {
  [K in CorIntensidade]: Record<string, string>;
};
