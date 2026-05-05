import { Common } from '@lib/common/types/base-entity.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums/maquina-grupo.enum';

export type Maquina = {
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
} & Common;
