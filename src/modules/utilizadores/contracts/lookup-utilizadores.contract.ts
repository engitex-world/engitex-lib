import { LookupOption } from '@lib/common/types';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type LookupUtilizadoresRequest = {
  funcao?: UtilizadorFuncao;
};

type UtilizadorLookup = LookupOption;

export type LookupUtilizadoresResponse = UtilizadorLookup[];
