import { ControloQualidadeResultadoResumo } from '@lib/modules/controlo-qualidade/types';

import { EncomendaArtigo, EncomendaArtigoFase } from '../types';

export type EncomendaArtigoFaseOrdemServicoResponse = EncomendaArtigoFase & {
  controloQualidadeResultado?: ControloQualidadeResultadoResumo;
};

export type EncomendaArtigoOrdemServicoResponse = Omit<EncomendaArtigo, 'fases'> & {
  fases: EncomendaArtigoFaseOrdemServicoResponse[];
};
