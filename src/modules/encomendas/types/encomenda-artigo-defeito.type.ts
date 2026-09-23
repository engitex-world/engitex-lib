import { AuditEntity } from '@lib/common/types/audit-entity.type';

import { EncomendaArtigoDefeitoTipo } from '../enums';

export type EncomendaArtigoDefeito = {
  id: number;
  encomendaArtigoFaseId: number;
  numeroRolo: string;
  totalPontos: number;
  bloqueouFase: boolean;
  observacoes?: string;
  ocorrencias: EncomendaArtigoDefeitoOcorrencia[];
} & AuditEntity;

export type EncomendaArtigoDefeitoOcorrencia = {
  id: number;
  tipo: EncomendaArtigoDefeitoTipo;
  dimensaoCm: number;
  pontos: number;
  fotos: EncomendaArtigoDefeitoFoto[];
};

export type EncomendaArtigoDefeitoFoto = {
  id: number;
  conteudoBase64: string;
  mimetype: string;
  tamanhoBytes: number;
};
