import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';

export type CreateUtilizadorContract = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  password?: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};
