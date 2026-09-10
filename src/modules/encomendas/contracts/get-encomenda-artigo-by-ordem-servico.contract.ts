import { ControloQualidadeResultadoResumo } from '@lib/modules/controlo-qualidade/types';

import { EncomendaArtigo, EncomendaArtigoDefeitoResumo, EncomendaArtigoFase } from '../types';

export type EncomendaArtigoFaseOrdemServicoResponse = EncomendaArtigoFase & {
  controloQualidadeResultado?: ControloQualidadeResultadoResumo;
  defeitos: EncomendaArtigoDefeitoResumo[];
};

export type EncomendaArtigoOrdemServicoResponse = Omit<EncomendaArtigo, 'fases'> & {
  fases: EncomendaArtigoFaseOrdemServicoResponse[];
};
