import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { EncomendaArtigoFase } from '@lib/modules/encomendas/types';
import { Maquina } from '@lib/modules/maquinas/types';

export type PlaneamentoFase = {
  encomendaArtigoFase: EncomendaArtigoFase;
  encomendaArtigoFaseId: number;
  maquina: Maquina;
  maquinaId: number;
  posicaoFila: number;
  dataPrevistaInicio?: Date;
  dataPrevistaFim?: Date;
  agrupamento?: PlaneamentoFaseAgrupamento;
  agrupamentoId?: number;
};

export type PlaneamentoFaseAgrupamento = {
  id: number;
  maquina: Maquina;
  maquinaId: number;
  dataPrevistaInicio?: Date;
  dataPrevistaFim?: Date;
} & AuditEntity;
