import { GrupoCorantes } from '@lib/modules/produtos/enums';

export const GRUPO_CORANTES_PRIORIDADE_TINGIMENTO: Record<GrupoCorantes, number> = {
  [GrupoCorantes.DISPERSO]: 1, // High-temperature synthetic dyeing (e.g., polyester)
  [GrupoCorantes.CATIONICO]: 2, // For cationically modified polyester
  [GrupoCorantes.REATIVO]: 3, // For cellulose fibers (e.g., cotton, viscose)
  [GrupoCorantes.CUBA]: 4, // Specialty dye, used for specific cases, such as polyester
  [GrupoCorantes.DIRETO]: 5, // For cellulosic fibers, simpler dyeing than reactive dyes
  [GrupoCorantes.ACIDO]: 6, // For protein fibers (e.g., wool, silk)
  [GrupoCorantes.BASICO]: 7, // For acrylic fibers (basic dyes are used specifically for acrylics)
  [GrupoCorantes.NATURAL]: 8, // For natural fibers, applied gently, suitable for wool, cotton, linen
  [GrupoCorantes.SULFUROSO]: 9, // Used for dark shades, typically on cotton
  [GrupoCorantes.PIGMENTO]: 10, // Pigments applied to many fiber types, often printed or used as a coating
  [GrupoCorantes.OTICO]: 11, // Optical brighteners, added as a final step to enhance brightness
};
