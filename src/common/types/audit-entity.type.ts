export type AuditEntity = {
  criadoEm: Date;
  criadoPor: string;
  atualizadoEm?: Date;
  atualizadoPor?: string;
  eliminadoEm?: Date;
  ativo: boolean;
};
