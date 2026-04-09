import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosRequest = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
};
