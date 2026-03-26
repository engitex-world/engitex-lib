import { Common } from '@lib/common/types/base-entity.type';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums/utilizador.enum';

export type Utilizador = {
  nome: string;
  nomeUtilizador: string;
  password: string;
  email?: string;
  telemovel?: string;
  funcoes: UtilizadorFuncao[];
  redefinirPassword: boolean;
  empresaId?: number;
} & Common;
