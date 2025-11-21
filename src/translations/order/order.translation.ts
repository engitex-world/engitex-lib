import { WorkOrderDeadlineStatusType } from '@lib/modules/work-orders/enums/work-order.enum';
import { LocaleType } from '../../common/enums/locale.enum';

type WorkOrderDeadlineStatusTranslations = {
  [key in LocaleType]: {
    [status in WorkOrderDeadlineStatusType]: string;
  };
};

const WorkOrderDeadlineStatusTranslations: WorkOrderDeadlineStatusTranslations = {
  en: {
    APPROVED: 'Approved',
    AUTO_APPROVED: 'Auto Approved',
    REJECTED: 'Rejected',
    PROPOSED_BY_COMPANY: 'Proposed by Company',
    PROPOSED_BY_CLIENT: 'Proposed by Client',
  },
  es: {
    APPROVED: 'Aprobado',
    AUTO_APPROVED: 'Aprobado Automáticamente',
    REJECTED: 'Rechazado',
    PROPOSED_BY_COMPANY: 'Propuesto por la Empresa',
    PROPOSED_BY_CLIENT: 'Propuesto por el Cliente',
  },
  pt: {
    APPROVED: 'Aprovado',
    AUTO_APPROVED: 'Aprovado Automaticamente',
    REJECTED: 'Rejeitado',
    PROPOSED_BY_COMPANY: 'Proposto pela Empresa',
    PROPOSED_BY_CLIENT: 'Proposto pelo Cliente',
  },
  hi: {
    APPROVED: 'Approved',
    AUTO_APPROVED: 'Auto Approved',
    REJECTED: 'Rejected',
    PROPOSED_BY_COMPANY: 'Proposed by Company',
    PROPOSED_BY_CLIENT: 'Proposed by Client',
  },
};

export const getTranslatedOrderDeadlineStatus = (
  locale: LocaleType,
  status: WorkOrderDeadlineStatusType
) => {
  return WorkOrderDeadlineStatusTranslations[locale][status] || status;
};
