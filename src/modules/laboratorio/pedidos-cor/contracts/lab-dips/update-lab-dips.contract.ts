import { LabDipEstado } from '../../enums';
import { LabDip } from '../../types';

export type UpdateLabDipsRequest = {
  labDips: UpdateLabDipItem[];
};

type UpdateLabDipItem = {
  ensaioId: number;
  estado: LabDipEstado;
  observacoes?: string;
};

export type UpdateLabDipsResponse = LabDip[];
