import { LookupOption } from '@lib/common/types';
import { MaquinaEstado, MaquinaGrupo } from '@lib/modules/maquinas/enums';
import { MaquinaHorario } from '@lib/modules/maquinas/types';

export type LookupMaquinasRequest = {
  grupo?: MaquinaGrupo;
};

type MaquinaLookup = LookupOption<{
  codigo: string;
  grupo: MaquinaGrupo;
  estado: MaquinaEstado;
  horarios: MaquinaHorario[];
}>;

export type LookupMaquinasResponse = MaquinaLookup[];
