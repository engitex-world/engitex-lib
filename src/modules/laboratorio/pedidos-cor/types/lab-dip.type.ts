import { LabDipEstado } from '../enums';

export type LabDip = {
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
