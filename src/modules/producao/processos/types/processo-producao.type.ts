import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type ProducaoFase = {
  id: number;
  nome: string;
  grupoMaquinas: MaquinaGrupo;
  tempoPreparacao: number;
  tempoKg?: number;
  tempoCiclo?: number;
} & AuditEntity;

export type ProcessoProducaoFase = {
  producaoFaseId: number;
  producaoFase: ProducaoFase;
  ordem: number;
  obrigatoria: boolean;
  observacoes?: string;
  processoProducaoId: number;
};

export type ProcessoProducao = {
  id: number;
  nome: string;
  fases: ProcessoProducaoFase[];
} & AuditEntity;
