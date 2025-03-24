import { AlertPriorityType } from '../enums';

export type ProductAlerts = {
  priceAlert: AlertPriorityType;
  technicalDocAlert: AlertPriorityType;
  securityDocAlert: AlertPriorityType;
  stockAlert: AlertPriorityType;
  daysAlert: AlertPriorityType;
  gotsApprovalLetterAlert: AlertPriorityType;
};
