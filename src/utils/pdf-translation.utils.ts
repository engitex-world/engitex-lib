import { ProductTrialFormulaUnitType } from '../enums';

// Helper function to map unit values
export const getUnitDisplay = (unit: ProductTrialFormulaUnitType | undefined): string => {
  switch (unit) {
    case ProductTrialFormulaUnitType.CENTILITER_PER_LITER:
      return 'cc/l';
    case ProductTrialFormulaUnitType.GRAM_PER_LITER:
      return 'gr/l';
    case ProductTrialFormulaUnitType.PERCENTAGE:
      return '%';
    default:
      return '-'; // Default for undefined or unmatched values
  }
};
