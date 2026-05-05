import { MaquinaGrupo } from '@lib/modules/maquinas/enums';

export type GetMaquinasRequest = {
  pesquisa?: string;
  grupo?: MaquinaGrupo;
};
