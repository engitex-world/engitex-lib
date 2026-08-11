import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';
import { Utilizador } from '@lib/modules/utilizadores/types';

export type CreateUtilizadorRequest = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  password?: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};

export type CreateUtilizadorResponse = { utilizador: Utilizador; codigoValidacao: string };
