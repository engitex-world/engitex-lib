import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums';
import { Utilizador } from '@lib/modules/utilizadores/types';

export type CreateUtilizadorRequest = {
  nome: string;
  nomeUtilizador: string;
  email: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  ativo?: boolean;
};

// `codigoValidacao` e a password inicial gerada pelo backend, devolvida uma unica vez na criacao
export type CreateUtilizadorResponse = { utilizador: Utilizador; codigoValidacao: string };
