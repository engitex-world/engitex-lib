import { Paginated } from '@lib/common/types';
import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

import { Maquina } from '../types';

export type GetMaquinasRequest = {
  pesquisa?: string;
  grupo?: MaquinaGrupo;
};

export type GetMaquinasResponse = Paginated<Maquina>;
