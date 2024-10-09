// Logic to generate the acronym with retry variations
export function generateAcronymFromName(name: string, attempt: number): string {
  const words = name.split(' ');

  // Remove common words like "Lda", "S.A.", etc.
  const filteredWords = words.filter(
    (word) =>
      !['lda', 's.a.', 'sociedade', 'unipessoal', 'confeções', 'confecção'].includes(
        word.toLowerCase()
      )
  );

  // On the first attempt, generate a standard acronym using first letters of two words
  if (attempt === 0) {
    if (filteredWords.length >= 2) {
      return filteredWords[0][0].toUpperCase() + filteredWords[1][0].toUpperCase();
    } else if (filteredWords.length === 1) {
      return filteredWords[0].substring(0, 2).toUpperCase();
    }
  }

  // On subsequent attempts, generate variations of the acronym
  switch (attempt) {
    case 1:
      // Use the first letter of the first word and the last letter of the second word (if exists)
      if (filteredWords.length >= 2) {
        return (
          filteredWords[0][0].toUpperCase() +
          filteredWords[1][filteredWords[1].length - 1].toUpperCase()
        );
      }
      break;
    case 2:
      // Use the first two letters of the first word
      return filteredWords[0].substring(0, 2).toUpperCase();
    case 3:
      // Use the first letter of the second word and the first letter of the third word (if exists)
      if (filteredWords.length >= 3) {
        return filteredWords[1][0].toUpperCase() + filteredWords[2][0].toUpperCase();
      } else if (filteredWords.length >= 2) {
        return filteredWords[1][0].toUpperCase() + filteredWords[0][1].toUpperCase();
      }
      break;
    case 4:
      // Use the first two letters of the last word
      return filteredWords[filteredWords.length - 1].substring(0, 2).toUpperCase();
    default:
      // Fallback: use the first two characters of the first word + a random number
      return (
        filteredWords[0].substring(0, 2).toUpperCase() + Math.floor(Math.random() * 10).toString()
      );
  }

  // Fallback in case no other logic applies
  throw new Error('Unable to generate acronym from the provided name');
}
