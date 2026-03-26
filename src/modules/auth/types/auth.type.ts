import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums/utilizador.enum';

export type AuthContext = {
  utilizador: AuthUtilizador | null;
  sessao: AuthSession | null;
};

export type AuthUtilizador = {
  id: number;
  nome: string;
  nomeUtilizador: string;
  email: string;
  resetPassword: boolean;
  funcoes: UtilizadorFuncao[];
  clienteId: number;
};

export type AuthSession = {
  sub: number;
  iat: number;
  exp: number;
  token: string;
};

export type JwtAuthPayload = {
  sub: number;
  iat: number;
  exp: number;
  utilizador: AuthUtilizador;
};
