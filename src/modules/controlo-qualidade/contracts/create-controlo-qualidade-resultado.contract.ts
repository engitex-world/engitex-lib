import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

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

export type CreateControloQualidadeResultadoResponse = ServerActionResult<
  ControloQualidadeResultado,
  ResponseError
>;
