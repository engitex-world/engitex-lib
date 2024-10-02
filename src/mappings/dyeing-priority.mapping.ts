import { ProductDyeGroupType } from "../enums";

export const dyeingPriorityMap: Record<ProductDyeGroupType, number> = {
  [ProductDyeGroupType.DISPERSE]: 1, // High-temperature synthetic dyeing (e.g., polyester)
  [ProductDyeGroupType.CATIONIC]: 2, // For cationically modified polyester
  [ProductDyeGroupType.REACTIVE]: 3, // For cellulose fibers (e.g., cotton, viscose)
  [ProductDyeGroupType.CUBA]: 4, // Specialty dye, used for specific cases, such as polyester
  [ProductDyeGroupType.ACID]: 5, // For protein fibers (e.g., wool, silk)
  [ProductDyeGroupType.BASIC]: 6, // For acrylic fibers (basic dyes are used specifically for acrylics)
  [ProductDyeGroupType.NATURAL]: 7, // For natural fibers, applied gently, suitable for wool, cotton, linen
  [ProductDyeGroupType.DIRECT]: 8, // For cellulosic fibers, simpler dyeing than reactive dyes
  [ProductDyeGroupType.SULFUROUS]: 9, // Used for dark shades, typically on cotton
  [ProductDyeGroupType.PIGMENT]: 9, // Pigments applied to many fiber types, often printed or used as a coating
  [ProductDyeGroupType.OPTICAL]: 10, // Optical brighteners, added as a final step to enhance brightness
};
