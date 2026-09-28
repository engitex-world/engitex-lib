import { AuditEntity } from '@lib/common/types/audit-entity.type';
import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';

import { ArtigoEstrutura } from '../enums/artigo-estrutura.enum';

export type Artigo = {
  id: number;
  nome: string;
  estrutura: ArtigoEstrutura;
  composicao: ArtigoComposicao[];
} & AuditEntity;

export type ArtigoComposicao = {
  fibra: ArtigoFibra;
  percentagem: number;
};
