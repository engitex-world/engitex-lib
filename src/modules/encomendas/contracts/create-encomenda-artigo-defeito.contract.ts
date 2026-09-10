import { EncomendaArtigoDefeitoTipo } from '../enums';
import { EncomendaArtigoDefeito } from '../types';

export type CreateEncomendaArtigoDefeitoRequest = {
  encomendaArtigoFaseId: number;
  numeroRolo?: string;
  bloquearFase: boolean;
  observacoes?: string;
  ocorrencias: CreateEncomendaArtigoDefeitoOcorrenciaRequest[];
};

export type CreateEncomendaArtigoDefeitoOcorrenciaRequest = {
  tipo: EncomendaArtigoDefeitoTipo;
  dimensaoCm: number;
  fotos?: CreateEncomendaArtigoDefeitoFotoRequest[];
};

export type CreateEncomendaArtigoDefeitoFotoRequest = {
  conteudoBase64: string;
  mimetype: string;
  tamanhoBytes: number;
};

export type CreateEncomendaArtigoDefeitoResponse = EncomendaArtigoDefeito;
