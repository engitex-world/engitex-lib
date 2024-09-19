export enum ColorIntensityType {
  LIGHT = 'LIGHT',
  MEDIUM = 'MEDIUM',
  DARK = 'DARK',
}

export enum ColorToneType {
  RED = 'RED',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  PURPLE = 'PURPLE',
  PINK = 'PINK',
  BROWN = 'BROWN',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export const ColorToneCode = {
  [ColorToneType.RED]: { pt: 'VM', en: 'RD', es: 'RJ' },
  [ColorToneType.ORANGE]: { pt: 'LR', en: 'OR', es: 'NA' },
  [ColorToneType.YELLOW]: { pt: 'AM', en: 'YE', es: 'AM' },
  [ColorToneType.GREEN]: { pt: 'VD', en: 'GR', es: 'VD' },
  [ColorToneType.BLUE]: { pt: 'AZ', en: 'BL', es: 'AZ' },
  [ColorToneType.PURPLE]: { pt: 'RX', en: 'PU', es: 'PU' },
  [ColorToneType.PINK]: { pt: 'RS', en: 'PK', es: 'RS' },
  [ColorToneType.BROWN]: { pt: 'CT', en: 'BR', es: 'MR' },
  [ColorToneType.BLACK]: { pt: 'PR', en: 'BL', es: 'NG' },
  [ColorToneType.WHITE]: { pt: 'BR', en: 'WH', es: 'BL' },
  [ColorToneType.GRAY]: { pt: 'CZ', en: 'GY', es: 'GR' },
};

export const ColorIntensityCode = {
  [ColorIntensityType.LIGHT]: { pt: 'C', en: 'L', es: 'C' },
  [ColorIntensityType.MEDIUM]: { pt: 'M', en: 'M', es: 'M' },
  [ColorIntensityType.DARK]: { pt: 'E', en: 'D', es: 'E' },
};

export enum ColorPreparationType {
  SCOURING = 'SCOURING',
  BLEACHING = 'BLEACHING',
  BLEACHING_SODA = 'BLEACHING_SODA',
  DESIZING = 'DESIZING',
}

export enum ColorTrialStatusType {
  STARTED = 'STARTED',
  SENT = 'SENT',
  DISCARDED = 'DISCARDED',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}
