export function setHora(data: Date, hora: string): Date {
  const [horas, minutos] = hora.split(':').map(Number);
  const resultado = new Date(data);
  resultado.setHours(horas, minutos, 0, 0);

  return resultado;
}
