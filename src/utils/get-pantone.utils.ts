import { ColorIntensityType, ColorToneType } from '../enums';

export type PantoneCodeType = 'TPX' | 'TCX' | 'TGX';

export interface PantoneEntry {
  code: string;
  hex: string;
  intensity: ColorIntensityType;
  tone: ColorToneType;
}

const pantonesList: Record<PantoneCodeType, PantoneEntry[]> = {
  TCX: [
    {
      code: '19-40522 TCX',
      hex: '#0F4C81',
      intensity: ColorIntensityType.MEDIUM,
      tone: ColorToneType.BLUE,
    },
  ],
  TPX: [],
  TGX: [],
};

export const getPantone = (code: string): PantoneEntry | undefined => {
  // Extract the type from the code using a regular expression
  const typeMatch = code.match(/(TPX|TCX|TGX)$/);

  if (!typeMatch) {
    // If the type is not found in the code, return undefined
    return undefined;
  }

  const type = typeMatch[0] as PantoneCodeType; // Extracted type
  return pantonesList[type]?.find((entry) => entry.code === code);
};
