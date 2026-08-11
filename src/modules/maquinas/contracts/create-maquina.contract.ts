import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { Maquina } from '@lib/modules/maquinas/types';

export type CreateMaquinaRequest = {
  nome: string;
  codigo: string;
  grupo: MaquinaGrupo;
  observacoes?: string;
};

export type CreateMaquinaResponse = ServerActionResult<Maquina, ResponseError>;
