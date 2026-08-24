export type MaquinaEspecificacoesJet = {
  capacidadeMinimaKg?: number;
  capacidadeMaximaKg?: number;
  volumeBanhoMinimoLitros?: number;
  volumeBanhoMaximoLitros?: number;
  numeroCamaras?: number;
};

export type MaquinaEspecificacoes = MaquinaEspecificacoesJet | Record<string, unknown>;
