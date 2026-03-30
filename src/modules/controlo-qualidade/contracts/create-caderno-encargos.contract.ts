import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosContract = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
};
