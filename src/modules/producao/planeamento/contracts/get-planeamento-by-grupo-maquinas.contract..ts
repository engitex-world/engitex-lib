import {
  Encomenda,
  EncomendaArtigo,
  EncomendaArtigoFase,
} from '@lib/modules/encomendas/types/encomenda.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { PlaneamentoFase } from '../types';

export type GetPlaneamentoByGrupoMaquinasRequest = {
  grupo: MaquinaGrupo;
};

export type GetPlaneamentoByGrupoMaquinasResponse = {
  grupo: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaResponse[];
  fasesPorPlanear: PlaneamentoFaseCard[];
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
