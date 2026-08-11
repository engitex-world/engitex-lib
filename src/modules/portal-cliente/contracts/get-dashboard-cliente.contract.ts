import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

export type GetDashboardClienteResponseData = {
  laboratorio: {
    email: string;
    numNovidades: number;
  };
};

export type GetDashboardClienteResponse = ServerActionResult<
  GetDashboardClienteResponseData,
  ResponseError
>;
