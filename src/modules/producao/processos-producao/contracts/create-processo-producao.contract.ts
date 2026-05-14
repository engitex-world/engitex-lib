import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type CreateProcessoProducaoFaseRequest = {
  nome: string;
  ordem: number;
  grupoMaquinas: MaquinaGrupo;
  obrigatoria?: boolean;
  observacoes?: string;
};

export type CreateProcessoProducaoRequest = {
  nome: string;
  descricao?: string;
  fases: CreateProcessoProducaoFaseRequest[];
};
