import { MaquinaGrupo } from '../enums';

export const MAQUINA_GRUPO_ORDER: Record<MaquinaGrupo, number> = {
  [MaquinaGrupo.DESENROLAR]: 0,
  [MaquinaGrupo.ABRIR_MALHA]: 1,
  [MaquinaGrupo.FECHAR_MALHA]: 2,
  [MaquinaGrupo.JET]: 3,
  [MaquinaGrupo.SECADOR]: 4,
  [MaquinaGrupo.LAMINA]: 5,
  [MaquinaGrupo.CARDA]: 6,
  [MaquinaGrupo.RAMULA]: 7,
  [MaquinaGrupo.SANFOR]: 8,
  [MaquinaGrupo.REVISTA]: 9,
  [MaquinaGrupo.CALANDRA]: 10,
};
