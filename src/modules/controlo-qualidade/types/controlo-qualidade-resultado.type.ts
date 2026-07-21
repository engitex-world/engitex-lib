import { Common } from '@lib/common/types/base-entity.type';

import { CadernoEncargosNorma } from './caderno-encargos-norma.type';
import { CadernoEncargos } from './caderno-encargos.type';

export enum ControloQualidadeResultadoEstado {
  CONFORME = 'CONFORME',
  NAO_CONFORME = 'NAO_CONFORME',
}

export type ControloQualidadeResultadoNorma = {
  cadernoEncargosNorma: CadernoEncargosNorma;
  valorMedido: number;
  conforme: boolean;
};

export type ControloQualidadeResultado = {
  encomendaArtigoId: number;
  encomendaArtigoFaseId: number;
  cadernoEncargos?: CadernoEncargos;
  estado: ControloQualidadeResultadoEstado;
  observacoes?: string;
  resultadoNormas: ControloQualidadeResultadoNorma[];
} & Common;
