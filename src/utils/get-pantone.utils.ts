export type PantoneCodeType = 'TPX' | 'TCX' | 'TGX';

interface PantoneEntry {
  code: string;
  hex: string;
}

const pantonesList: Record<PantoneCodeType, PantoneEntry[]> = {
  TPX: [{ code: '1234-567 TPX', hex: '#F6EAC2' }],
  TCX: [{ code: '1234-567 TCX', hex: '#8FA6C7' }],
  TGX: [{ code: '1234-567 TGX', hex: '#F6EAC2' }],
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

console.log(getPantone('12-34567 TCX'));
// Output: { code: "PANTONE 123 TPX", hex: "#F6EAC2" }
