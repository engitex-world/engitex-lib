import { CertificationType } from '@engitex-lib/enums';

import { Product, ProductAlerts } from '../types';

export function productStockAlerts(product: Product): ProductAlerts {
  const MARGIN_SAFE_STOCK = 1.2;
  const DAYS_THRESHOLD = 60;

  // Alert priority values
  const NO_ALERT = 0;
  const HIGH_PRIORITY = 1;
  const MEDIUM_PRIORITY = 2;

  const {
    stockQuantity,
    stockReserved,
    stockLimitDays,
    stockLimitQuantity,
    lastPurchaseDate,
    suppliers,
    docTechnicalDate,
    docSecurityDate,
    certifications,
    gotsApprovalLetterDate,
  } = product;

  const today = new Date();
  const hasNoPrice = suppliers.length === 0 ? HIGH_PRIORITY : NO_ALERT;

  const docTechnicalDateFormat = new Date(docTechnicalDate);

  const technicalDocDaysLeft = docTechnicalDate
    ? Math.floor((docTechnicalDateFormat.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const hasNoTechnicalDocOrExpired =
    !docTechnicalDate || docTechnicalDateFormat < today
      ? HIGH_PRIORITY
      : technicalDocDaysLeft <= DAYS_THRESHOLD
        ? MEDIUM_PRIORITY
        : NO_ALERT;

  const docSecurityDateFormat = new Date(docSecurityDate);

  const securityDocDaysLeft = docSecurityDate
    ? Math.floor((docSecurityDateFormat.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const hasNoSecurityDocOrExpired =
    !docSecurityDate || docSecurityDateFormat < today
      ? HIGH_PRIORITY
      : securityDocDaysLeft <= DAYS_THRESHOLD
        ? MEDIUM_PRIORITY
        : NO_ALERT;

  const dtLastPurchaseDate = new Date(lastPurchaseDate);
  const daysSinceLastPurchase = Math.floor((today.getTime() - dtLastPurchaseDate.getTime()) / (1000 * 60 * 60 * 24));

  const hasExceedStock =
    stockQuantity - stockReserved < stockLimitQuantity
      ? HIGH_PRIORITY
      : stockLimitQuantity * MARGIN_SAFE_STOCK > stockQuantity - stockReserved ||
          (!stockLimitQuantity && stockQuantity < 20)
        ? MEDIUM_PRIORITY
        : NO_ALERT;

  const hasExceedDays =
    stockLimitDays && stockLimitDays != 0
      ? daysSinceLastPurchase > stockLimitDays
        ? HIGH_PRIORITY
        : stockLimitDays * MARGIN_SAFE_STOCK < daysSinceLastPurchase
          ? MEDIUM_PRIORITY
          : NO_ALERT
      : NO_ALERT;

  const gotsApprovalLetterDateFormat = new Date(gotsApprovalLetterDate);

  const gotsApprovalLetterDaysLeft = gotsApprovalLetterDate
    ? Math.floor((gotsApprovalLetterDateFormat.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const gotsApprovalLetterAlert = certifications?.includes(CertificationType.GOTS_7)
    ? !gotsApprovalLetterDate || gotsApprovalLetterDateFormat < today
      ? HIGH_PRIORITY
      : gotsApprovalLetterDaysLeft <= DAYS_THRESHOLD
        ? MEDIUM_PRIORITY
        : NO_ALERT
    : NO_ALERT;

  return {
    priceAlert: hasNoPrice,
    technicalDocAlert: hasNoTechnicalDocOrExpired,
    securityDocAlert: hasNoSecurityDocOrExpired,
    stockAlert: hasExceedStock,
    daysAlert: hasExceedDays,
    gotsApprovalLetterAlert,
  };
}
