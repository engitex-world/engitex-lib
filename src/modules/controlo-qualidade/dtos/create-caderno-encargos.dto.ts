import { Certificacao } from '@lib/modules/produtos/enums';

export type CreateCadernoEncargosDto = {
  nome: string;
  clienteId: number;
  certificacoes?: Certificacao[];
};
