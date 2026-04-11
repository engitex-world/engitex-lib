import { LabDipEstado } from '../enums';

export type UpdateLabDipItem = {
  labDipId: number;
  estado: LabDipEstado;
  observacoes?: string;
};

export type UpdateLabDipsRequest = {
  labDips: UpdateLabDipItem[];
};
