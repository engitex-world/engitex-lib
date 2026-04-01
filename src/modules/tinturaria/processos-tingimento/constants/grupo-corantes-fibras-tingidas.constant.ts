import { ArtigoFibra } from '@lib/modules/artigos/enums/artigo-fibra.enum';
import { GrupoCorantes } from '@lib/modules/produtos/enums';

export const GRUPO_CORANTES_FIBRAS_TINGIDAS: Record<GrupoCorantes, ArtigoFibra[]> = {
  // Corantes ácidos são usados para tingir fibras proteicas e poliamidas
  [GrupoCorantes.ACIDO]: [
    ArtigoFibra.WS, // Caxemira
    ArtigoFibra.WO, // Lã
    ArtigoFibra.PA, // Poliamida
    ArtigoFibra.SE, // Seda
  ],

  // Corantes catiônicos são usados para tingir poliéster modificado catiônico
  [GrupoCorantes.CATIONICO]: [
    ArtigoFibra.PES_CAT, // Poliéster catiônico
  ],

  // Corantes do tipo "cuba" são usados para tingir poliéster catiônico com características específicas
  [GrupoCorantes.CUBA]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.HA, // Cânhamo
    ArtigoFibra.CLY, // Lyocell
    ArtigoFibra.MD, // Modal
    ArtigoFibra.CV, // Viscose
  ],

  // Corantes diretos são aplicáveis a fibras celulósicas, proporcionando fácil aplicação e boa solidez em soluções aquosas
  [GrupoCorantes.DIRETO]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.HA, // Cânhamo
    ArtigoFibra.LI, // Linho
    ArtigoFibra.CLY, // Lyocell
    ArtigoFibra.MD, // Modal
    ArtigoFibra.CV, // Viscose
  ],

  // Corantes dispersos são usados para tingir fibras sintéticas hidrofóbicas, como o poliéster
  [GrupoCorantes.DISPERSO]: [
    ArtigoFibra.PES, // Poliéster
  ],

  // Corantes naturais são usados para tingir fibras naturais e regeneradas, geralmente menos tóxicos e mais sustentáveis
  [GrupoCorantes.NATURAL]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.LI, // Linho
    ArtigoFibra.WO, // Lã
    ArtigoFibra.SE, // Seda
    ArtigoFibra.HA, // Cânhamo
    ArtigoFibra.CV, // Viscose
  ],

  // Corantes ópticos são usados para melhorar o brilho e fornecer uma aparência branca a fibras naturais e sintéticas
  [GrupoCorantes.OTICO]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.LI, // Linho
    ArtigoFibra.WO, // Lã
    ArtigoFibra.PES, // Poliéster
    ArtigoFibra.SE, // Seda
    ArtigoFibra.MD, // Modal
    ArtigoFibra.CV, // Viscose
    ArtigoFibra.CLY, // Lyocell
  ],

  // Pigmentos são amplamente utilizados em misturas de fibras naturais e sintéticas, não se fixam quimicamente na fibra
  [GrupoCorantes.PIGMENTO]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.LI, // Linho
    ArtigoFibra.PES, // Poliéster
    ArtigoFibra.CLY, // Lyocell
    ArtigoFibra.CV, // Viscose
  ],

  // Corantes reativos se ligam quimicamente a fibras celulósicas e proporcionam boa solidez e vivacidade de cor
  [GrupoCorantes.REATIVO]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.HA, // Cânhamo
    ArtigoFibra.LI, // Linho
    ArtigoFibra.CLY, // Lyocell
    ArtigoFibra.MD, // Modal
    ArtigoFibra.CV, // Viscose
    ArtigoFibra.WO, // Lã
  ],

  // Corantes sulfurosos são usados principalmente em fibras celulósicas para tingimentos de tons escuros e alta opacidade
  [GrupoCorantes.SULFUROSO]: [
    ArtigoFibra.CO, // Algodão
    ArtigoFibra.HA, // Cânhamo
    ArtigoFibra.LI, // Linho
  ],
  [GrupoCorantes.BASICO]: [ArtigoFibra.PAC],
};
