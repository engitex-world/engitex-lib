import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosNormaRequest = {
  normaQualidadeId: number;
  valorMin?: number;
  valorMax?: number;
};

export type CreateCadernoEncargosRequest = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
  normas: CreateCadernoEncargosNormaRequest[];
};
