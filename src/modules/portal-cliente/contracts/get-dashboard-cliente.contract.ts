
export type GetDashboardClienteResponseData = {
  laboratorio: {
    email: string;
    numNovidades: number;
  };
};

export type GetDashboardClienteResponse = Promise<GetDashboardClienteResponseData>;
