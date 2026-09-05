import { ControloQualidadeResultadoEstado } from '../enums';

export type ControloQualidadeResultadoResumo = {
  id: number;
  encomendaArtigoFaseId: number;
  estado: ControloQualidadeResultadoEstado;
};
