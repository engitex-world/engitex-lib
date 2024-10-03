import { FiberType, ProductDyeGroupType } from '../enums';

export const dyeGroupToFibersMap: Record<ProductDyeGroupType, FiberType[]> = {
  // Corantes ácidos são usados para tingir fibras proteicas e poliamidas
  [ProductDyeGroupType.ACID]: [
    FiberType.WS, // Caxemira
    FiberType.WO, // Lã
    FiberType.PA, // Poliamida
    FiberType.SE, // Seda
  ],

  // Corantes catiônicos são usados para tingir poliéster modificado catiônico
  [ProductDyeGroupType.CATIONIC]: [
    FiberType.PES_CAT, // Poliéster catiônico
  ],

  // Corantes do tipo "cuba" são usados para tingir poliéster catiônico com características específicas
  [ProductDyeGroupType.CUBA]: [
    FiberType.CO, // Algodão
    FiberType.HA, // Cânhamo
    FiberType.CLY, // Lyocell
    FiberType.MD, // Modal
    FiberType.CV, // Viscose
  ],

  // Corantes diretos são aplicáveis a fibras celulósicas, proporcionando fácil aplicação e boa solidez em soluções aquosas
  [ProductDyeGroupType.DIRECT]: [
    FiberType.CO, // Algodão
    FiberType.HA, // Cânhamo
    FiberType.LI, // Linho
    FiberType.CLY, // Lyocell
    FiberType.MD, // Modal
    FiberType.CV, // Viscose
  ],

  // Corantes dispersos são usados para tingir fibras sintéticas hidrofóbicas, como o poliéster
  [ProductDyeGroupType.DISPERSE]: [
    FiberType.PES, // Poliéster
  ],

  // Corantes naturais são usados para tingir fibras naturais e regeneradas, geralmente menos tóxicos e mais sustentáveis
  [ProductDyeGroupType.NATURAL]: [
    FiberType.CO, // Algodão
    FiberType.LI, // Linho
    FiberType.WO, // Lã
    FiberType.SE, // Seda
    FiberType.HA, // Cânhamo
    FiberType.CV, // Viscose
  ],

  // Corantes ópticos são usados para melhorar o brilho e fornecer uma aparência branca a fibras naturais e sintéticas
  [ProductDyeGroupType.OPTICAL]: [
    FiberType.CO, // Algodão
    FiberType.LI, // Linho
    FiberType.WO, // Lã
    FiberType.PES, // Poliéster
    FiberType.SE, // Seda
    FiberType.MD, // Modal
    FiberType.CV, // Viscose
    FiberType.CLY, // Lyocell
  ],

  // Pigmentos são amplamente utilizados em misturas de fibras naturais e sintéticas, não se fixam quimicamente na fibra
  [ProductDyeGroupType.PIGMENT]: [
    FiberType.CO, // Algodão
    FiberType.LI, // Linho
    FiberType.PES, // Poliéster
    FiberType.CLY, // Lyocell
    FiberType.CV, // Viscose
  ],

  // Corantes reativos se ligam quimicamente a fibras celulósicas e proporcionam boa solidez e vivacidade de cor
  [ProductDyeGroupType.REACTIVE]: [
    FiberType.CO, // Algodão
    FiberType.HA, // Cânhamo
    FiberType.LI, // Linho
    FiberType.CLY, // Lyocell
    FiberType.MD, // Modal
    FiberType.CV, // Viscose
    FiberType.WO, // Lã
  ],

  // Corantes sulfurosos são usados principalmente em fibras celulósicas para tingimentos de tons escuros e alta opacidade
  [ProductDyeGroupType.SULFUROUS]: [
    FiberType.CO, // Algodão
    FiberType.HA, // Cânhamo
    FiberType.LI, // Linho
  ],
  [ProductDyeGroupType.BASIC]: [FiberType.PAC],
};
