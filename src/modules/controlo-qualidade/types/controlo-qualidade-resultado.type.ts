import { Common } from '@lib/common/types/base-entity.type';

import { ControloQualidadeResultadoEstado } from '../enums';

import { CadernoEncargosNorma } from './caderno-encargos-norma.type';
import { CadernoEncargos } from './caderno-encargos.type';

export type ControloQualidadeResultado = {
  encomendaArtigoId: number;
  encomendaArtigoFaseId: number;
  cadernoEncargos?: CadernoEncargos;
  estado: ControloQualidadeResultadoEstado;
  observacoes?: string;
  resultados: ControloQualidadeResultadoNorma[];
} & Common;

export type ControloQualidadeResultadoNorma = {
  cadernoEncargosNorma: CadernoEncargosNorma;
  valor: ControloQualidadeResultadoNormaValor;
  conforme: boolean | null;
};

export type ControloQualidadeResultadoNormaValor = number | ControloQualidadeResultadoMultifibras;

export type ControloQualidadeResultadoMultifibras = {
  alteracaoCor: number;
  acetato: number;
  algodao: number;
  poliamida: number;
  poliester: number;
  acrilico: number;
  la: number;
};
