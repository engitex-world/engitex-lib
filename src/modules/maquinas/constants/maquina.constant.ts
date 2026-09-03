import { MaquinaGrupo, SetorProducao } from '../enums';

export const MAQUINA_GRUPO_ORDER: Record<MaquinaGrupo, number> = {
  [MaquinaGrupo.CONTROLO_QUALIDADE]: 0, // Valor 0 por ser ignorada
  [MaquinaGrupo.DESENROLAR]: 1,
  [MaquinaGrupo.ABRIR_MALHA]: 2,
  [MaquinaGrupo.FECHAR_MALHA]: 3,
  [MaquinaGrupo.JET]: 4,
  [MaquinaGrupo.SECADOR]: 5,
  [MaquinaGrupo.LAMINA]: 6,
  [MaquinaGrupo.CARDA]: 7,
  [MaquinaGrupo.RAMOLA]: 8,
  [MaquinaGrupo.SANFOR]: 9,
  [MaquinaGrupo.REVISTA]: 10,
  [MaquinaGrupo.CALANDRA]: 11,
  [MaquinaGrupo.EXPEDICAO]: 12,
};

export const MAQUINA_GRUPO_SETOR: Record<MaquinaGrupo, SetorProducao | undefined> = {
  [MaquinaGrupo.CONTROLO_QUALIDADE]: undefined,
  [MaquinaGrupo.DESENROLAR]: SetorProducao.PREPARACAO,
  [MaquinaGrupo.ABRIR_MALHA]: SetorProducao.TINTURARIA,
  [MaquinaGrupo.FECHAR_MALHA]: SetorProducao.PREPARACAO,
  [MaquinaGrupo.JET]: SetorProducao.TINTURARIA,
  [MaquinaGrupo.SECADOR]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.LAMINA]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.CARDA]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.RAMOLA]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.SANFOR]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.REVISTA]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.CALANDRA]: SetorProducao.ACABAMENTOS,
  [MaquinaGrupo.EXPEDICAO]: SetorProducao.EXPEDICAO,
};

export function getMaquinaGrupoSortOrder(grupo: MaquinaGrupo): number {
  return MAQUINA_GRUPO_ORDER[grupo];
}
