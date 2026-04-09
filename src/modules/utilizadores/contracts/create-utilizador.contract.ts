import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type CreateUtilizadorRequest = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  password?: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};
