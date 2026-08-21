import { CorTom } from '../enums/cor.enum';

export const PANTONE_LENGTH = 11;

export const CorTomCodigo: CorTomCodigo = {
  [CorTom.VERMELHO]: { pt: 'VM', en: 'RD', es: 'RJ' },
  [CorTom.LARANJA]: { pt: 'LR', en: 'OR', es: 'NA' },
  [CorTom.AMARELO]: { pt: 'AM', en: 'YE', es: 'AM' },
  [CorTom.VERDE]: { pt: 'VD', en: 'GR', es: 'VD' },
  [CorTom.TURQUESA]: { pt: 'TQ', en: 'TQ', es: 'TQ' },
  [CorTom.AZUL]: { pt: 'AZ', en: 'BL', es: 'AZ' },
  [CorTom.ROXO]: { pt: 'RX', en: 'PU', es: 'PU' },
  [CorTom.ROSA]: { pt: 'RS', en: 'PK', es: 'RS' },
  [CorTom.CASTANHO]: { pt: 'CT', en: 'BR', es: 'MR' },
  [CorTom.BEGE]: { pt: 'BG', en: 'BG', es: 'BG' },
  [CorTom.PRETO]: { pt: 'PR', en: 'BL', es: 'NG' },
  [CorTom.BRANCO]: { pt: 'BR', en: 'WH', es: 'BL' },
  [CorTom.CINZA]: { pt: 'CZ', en: 'GY', es: 'GR' },
};

type CorTomCodigo = {
  [K in CorTom]: Record<string, string>;
};
