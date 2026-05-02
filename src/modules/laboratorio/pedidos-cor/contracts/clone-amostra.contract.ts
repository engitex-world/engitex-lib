/**
 * Request para clonar fórmula de uma amostra de cor para outra.
 *
 * @param ensaioIds - IDs dos ensaios a clonar. Se não fornecido:
 *   - Se existe lab-dip APROVADO: clona apenas esse ensaio
 *   - Se existem lab-dips ENVIADOS: clona todos os ensaios ENVIADOS
 */
export type CloneAmostraRequest = {
  ensaioIds?: number[];
};
