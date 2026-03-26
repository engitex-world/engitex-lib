import { LabDipEstado } from '../enums';

export type LabDip = {
  ensaioAmostraId: number;
  codigo: string;
  estado: LabDipEstado;
  historicoEstado: HistoricoEstado[];
  observacoesCliente?: string;
};

interface HistoricoEstado {
  estado: LabDipEstado;
  data: Date;
  atualizadoPor: string;
}
