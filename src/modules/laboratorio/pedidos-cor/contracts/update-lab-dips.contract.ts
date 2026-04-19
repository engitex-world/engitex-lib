import { LabDipEstado } from '../enums';

export type UpdateLabDipsRequest = {
  ensaiosIds: number[];
  estado?: LabDipEstado;
  observacoes?: string;
};
