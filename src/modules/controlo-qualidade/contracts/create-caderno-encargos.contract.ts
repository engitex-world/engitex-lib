import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosNormaRequest = {
  normaQualidadeId: number;
  valorMin?: number;
  valorMax?: number;
  observacoes?: string;
};

export type CreateCadernoEncargosRequest = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
  normas: CreateCadernoEncargosNormaRequest[];
};
