export function getInicioDoDiaSeguinte(data: Date): Date {
  const inicioDoDia = new Date(data);
  inicioDoDia.setHours(0, 0, 0, 0);
  inicioDoDia.setDate(inicioDoDia.getDate() + 1);

  return inicioDoDia;
}
