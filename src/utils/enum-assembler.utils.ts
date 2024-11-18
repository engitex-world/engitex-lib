import {
  BusinessPaymentTerm,
  BusinessType,
  CertificationType,
  ColorIntensityType,
  ColorPreparationType,
  ColorRequestStatusType,
  ColorToneType,
  CountryType,
  FabricTreatmentType,
  FiberType,
  HealthSafetyPhraseType,
  ProductAuxiliaryType,
  ProductDyeGroupType,
  ProductFinishingType,
  ProductIonsClassificationType,
  ProductPurchaseUnitType,
  ProductTrialFormulaUnitType,
  ProductType,
  UserRoleType,
} from '../enums';

type SelectOptionsGroupBy<T extends string, U extends string> = {
  [key in T]: U[];
};

function enumToSelect<T extends Record<string, string | number>>(
  enumObject: T
): { id: keyof T; name: T[keyof T] }[] {
  return Object.keys(enumObject).map((key) => ({
    id: key as keyof T,
    name: enumObject[key as keyof T],
  }));
}

function enumToSelectGroupBy<T extends string, U extends string>(
  mapping: SelectOptionsGroupBy<T, U>
): { id: U; name: U; group: T }[] {
  const result: { id: U; name: U; group: T }[] = [];

  Object.keys(mapping).forEach((group) => {
    const subtypes = mapping[group as T];
    subtypes.forEach((subtype) => {
      result.push({
        id: subtype,
        name: subtype,
        group: group as T,
      });
    });
  });

  return result;
}

export const FIBER_LIST = enumToSelect(FiberType);
export const CERTIFICATION_LIST = enumToSelect(CertificationType);
export const HEALTH_SAFETY_PHRASES_LIST = enumToSelect(HealthSafetyPhraseType);
export const PRODUCT_TYPE_LIST = enumToSelect(ProductType);
export const PRODUCT_IONS_CLASSIFICATION_TYPE_LIST = enumToSelect(ProductIonsClassificationType);
export const PRODUCT_DYE_GROUP_LIST = enumToSelect(ProductDyeGroupType);
export const PRODUCT_AUXILIARY_LIST = enumToSelect(ProductAuxiliaryType);
export const PRODUCT_FINISHING_LIST = enumToSelect(ProductFinishingType);
export const PRODUCT_FORMULA_UNIT_LIST = enumToSelect(ProductTrialFormulaUnitType);
export const PRODUCT_PURCHASE_UNIT_LIST = enumToSelect(ProductPurchaseUnitType);
export const FABRIC_TREATMENT_LIST = enumToSelect(FabricTreatmentType);
export const BUSINESS_TYPE_LIST = enumToSelect(BusinessType);
export const COUNTRY_LIST = enumToSelect(CountryType);
export const USER_ROLE_LIST = enumToSelect(UserRoleType);
export const COLOR_TONE_LIST = enumToSelect(ColorToneType);
export const COLOR_INTENSITY_LIST = enumToSelect(ColorIntensityType);
export const COLOR_REQUEST_STATUS_LIST = enumToSelect(ColorRequestStatusType);
export const COLOR_PREPARATION_LIST = enumToSelect(ColorPreparationType);
export const PAYMENT_TERM_LIST = enumToSelect(BusinessPaymentTerm);
