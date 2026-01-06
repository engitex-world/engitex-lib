export type Common = {
  id: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updateBy?: string;
  isActive: boolean;
};
