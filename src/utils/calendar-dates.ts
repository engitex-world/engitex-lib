export function getYearDigits(): string {
  const currentYear = new Date().getFullYear();
  return currentYear.toString().slice(-2);
}

export function addBusinessDays(startDate: Date, days: number): Date {
  let dayCount = 0;
  let currentDate = new Date(startDate);

  while (dayCount < days) {
    currentDate.setDate(currentDate.getDate() + 1);
    const dayOfWeek = currentDate.getDay();
    // Check if it's a weekday (Monday to Friday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dayCount++;
    }
  }

  return currentDate;
}
