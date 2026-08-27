import { LookupOption } from '@lib/common/types';
import { Certificacao } from '@lib/modules/produtos/enums/certificacao.enum';

export type LookupCadernoEncargosRequest = {
  clienteId?: number;
};

export type CadernoEncargosLookup = LookupOption<{
  certificacoes: Certificacao[];
}>;

export type LookupCadernoEncargosResponse = CadernoEncargosLookup[];
