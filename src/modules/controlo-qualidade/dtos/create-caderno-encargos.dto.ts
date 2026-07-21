import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosNormaDto = {
  normaQualidadeId: number;
  valorMin?: number;
  valorMax?: number;
  observacoes?: string;
};

export type CreateCadernoEncargosDto = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
  normas: CreateCadernoEncargosNormaDto[];
};
