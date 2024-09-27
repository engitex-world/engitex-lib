import { ProductType, ProductSubType } from "../enums";

// Helper function to generate product code
export function generateProductCode(
  type: ProductType,
  subType: ProductSubType[],
  id: number
): string {
  //const prefix = `${ProductTypeAcronym[type]}.${ProductSubTypePrefix[subType]}`;
  const prefix = '';
  return `${prefix}.${id}`;
}
