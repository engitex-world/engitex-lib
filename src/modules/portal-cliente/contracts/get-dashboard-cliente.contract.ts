export interface GetDashboardClienteResponse {
  laboratorio: Departamento;
}

interface Departamento {
  email: number;
  numNovidades: string;
}
