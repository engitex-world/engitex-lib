import { OrderDeadlineFormatType, OrderDeadlineStatusType } from '../enums';

export interface AuditDeadlineRecord {
  deadline: Date;
  deadlineType: OrderDeadlineFormatType;
  deadlineStatus: OrderDeadlineStatusType;
  deadlineUpdatedAt: Date;
}

export interface AuditRemarksRecord {
  remark: string;
  author: 'DYEING_HOUSE' | 'CLIENT';
  date: Date;
}
