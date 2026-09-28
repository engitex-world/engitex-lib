import { ControloQualidadeResultadoResumo } from '@lib/modules/controlo-qualidade/types';

import { EncomendaArtigo, EncomendaArtigoDefeito, EncomendaArtigoFase } from '../types';

export type EncomendaArtigoFaseOrdemServicoResponse = EncomendaArtigoFase & {
  controloQualidadeResultado?: ControloQualidadeResultadoResumo;
  defeitos: EncomendaArtigoDefeito[];
};

export type EncomendaArtigoOrdemServicoResponse = Omit<EncomendaArtigo, 'fases'> & {
  fases: EncomendaArtigoFaseOrdemServicoResponse[];
};
