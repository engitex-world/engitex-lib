export function getDiaSemana(data: Date): number {
  if (data.getDay() === 0) {
    return 7; // Domingo é representado como 7
  } else {
    return data.getDay();
  }
}
