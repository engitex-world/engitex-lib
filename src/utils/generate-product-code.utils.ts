import { ProductDyeGroupType, ProductSubType, ProductType } from '../enums';
import { ProductDyeGroupAcronym, ProductTypeAcronym } from '../mappings/product-code.mapping';

// Helper function to generate product code
export function generateProductCode(
  type: ProductType,
  subType: ProductSubType[],
  id: number
): string {
  let prefix = `${ProductTypeAcronym[type]}`;

  // If the type is COLORANT, use the first element of the subType array and the ProductDyeGroupAcronym mapping
  if (type === ProductType.COLORANT && subType.length > 0) {
    const dyeGroup = subType[0] as ProductDyeGroupType; // Cast to ensure it's a valid ProductDyeGroupType
    const dyeGroupAcronym = ProductDyeGroupAcronym[dyeGroup];
    prefix = `${prefix}.${dyeGroupAcronym}`; // Append the dye group acronym to the prefix
  }

  return `${prefix}.${id}`;
}
