import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type CreateMaquinaRequest = {
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
};
