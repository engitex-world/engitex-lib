import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { UtilizadorFuncao } from '@lib/modules/utilizadores/enums/utilizador.enum';

export type Utilizador = {
  id: number;
  nome: string;
  nomeUtilizador: string;
  email: string;
  telemovel: string;
  funcoes: UtilizadorFuncao[];
  redefinirPassword: boolean;
} & AuditEntity;
