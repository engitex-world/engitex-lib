import { ControloQualidadeResultado, ControloQualidadeResultadoNormaValor } from '../types';

export type CreateControloQualidadeResultadoRequest = {
  encomendaArtigoId: number;
  encomendaArtigoFaseId: number;
  cadernoEncargosId?: number;
  observacoes?: string;
  resultados: CreateControloQualidadeResultadoNormaRequest[];
};

export type CreateControloQualidadeResultadoNormaRequest = {
  cadernoEncargosNormaId: number;
  valor: ControloQualidadeResultadoNormaValor;
};

export type CreateControloQualidadeResultadoResponse = Promise<ControloQualidadeResultado>;
