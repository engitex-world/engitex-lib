import { LabDipEstado } from '../enums';

export type UpdateLabDipsRequest = {
  labDips: UpdateLabDipItem[];
};

type UpdateLabDipItem = {
  ensaioId: number;
  estado: LabDipEstado;
  observacoes?: string;
};
