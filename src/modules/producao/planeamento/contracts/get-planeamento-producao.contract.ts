import {
  Encomenda,
  EncomendaArtigo,
  EncomendaArtigoFase,
} from '@lib/modules/encomendas/types/encomenda.type';
import { ManutencaoIntervencao } from '@lib/modules/manutencao/types';
import { MaquinaEstado, MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { MaquinaHorario } from '@lib/modules/maquinas/types';

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
  estado: MaquinaEstado;
  faseEmExecucao?: PlaneamentoFaseCard;
  fila: PlaneamentoFaseCard[];
  horarios?: MaquinaHorario[];
  intervencoes: ManutencaoIntervencao[];
};

export type GetPlaneamentoProducaoResponseData = {
  grupoMaquinas: MaquinaGrupo;
  maquinas: PlaneamentoMaquinaResponse[];
  fasesPorPlanear: PlaneamentoFaseCard[];
};

export type GetPlaneamentoProducaoResponse = GetPlaneamentoProducaoResponseData;
