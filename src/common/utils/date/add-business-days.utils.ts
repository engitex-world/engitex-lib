/**
 * Adds a number of business days (Monday to Friday) to the given start date.
 */
export function addBusinessDaysToDate(startDate: Date, businessDaysToAdd: number): Date {
  let addedDays = 0;
  const date = new Date(startDate);

  while (addedDays < businessDaysToAdd) {
    date.setDate(date.getDate() + 1);
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      addedDays++;
    }
  }

  return date;
}
