import { MaquinaGrupo } from '../enums';

const MAQUINA_GRUPO_ORDER: Record<MaquinaGrupo, number> = {
  // Valor 0 por ser ignorada
  [MaquinaGrupo.CONTROLO_QUALIDADE]: 0,
  [MaquinaGrupo.EXPEDICAO]: 0,
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
};

export function getMaquinaGrupoSortOrder(grupo: MaquinaGrupo): number {
  return MAQUINA_GRUPO_ORDER[grupo];
}
