import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import {
  Encomenda,
  EncomendaArtigo,
  EncomendaArtigoFase,
} from '@lib/modules/encomendas/types/encomenda.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { PlaneamentoFase } from '../types';

export type GetPlaneamentoProducaoRequest = {
  grupoMaquinas?: MaquinaGrupo;
};

export type PlaneamentoFaseCard = {
  id: number;
  planeamentoFaseId?: number;
  encomenda: Encomenda;
  artigo: EncomendaArtigo;
  fase: EncomendaArtigoFase;
  planeamento?: PlaneamentoFase;
  numDependencias: number;
};

export type PlaneamentoMaquinaResponse = {
  maquinaId: number;
  nome: string;
  codigo: string;
  faseEmExecucao?: PlaneamentoFaseCard;
  fila: PlaneamentoFaseCard[];
};

export type GetPlaneamentoProducaoResponseData = {
  grupoMaquinas: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaResponse[];
  fasesPorPlanear: PlaneamentoFaseCard[];
};

export type GetPlaneamentoProducaoResponse = ServerActionResult<
  GetPlaneamentoProducaoResponseData,
  ResponseError
>;
