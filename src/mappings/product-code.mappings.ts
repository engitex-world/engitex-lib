import { ProductType, ProductDyeGroupType } from '../enums';

export const ProductTypeAcronym = {
  [ProductType.COLORANT]: 'C',
  [ProductType.AUXILIARY]: 'A',
  [ProductType.FINISHING]: 'F',
};

export const ProductDyeGroupAcronym: Record<ProductDyeGroupType, string> = {
  [ProductDyeGroupType.REACTIVE]: 'RE',
  [ProductDyeGroupType.ACID]: 'AC',
  [ProductDyeGroupType.DIRECT]: 'DI',
  [ProductDyeGroupType.DISPERSE]: 'DP',
  [ProductDyeGroupType.CUBA]: 'CU',
  [ProductDyeGroupType.CATIONIC]: 'CA',
  [ProductDyeGroupType.OPTICAL]: 'OT',
  [ProductDyeGroupType.SULFUROUS]: 'SU',
  [ProductDyeGroupType.NATURAL]: 'NA',
  [ProductDyeGroupType.PIGMENT]: 'PG',
  [ProductDyeGroupType.BASIC]: 'BA',
};
