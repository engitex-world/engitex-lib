import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { ControloQualidadeResultado } from '../types';

export type GetControloQualidadeResultadoByIdRequest = {
  id: number;
};

export type GetControloQualidadeResultadoByIdResponse = ServerActionResult<
  ControloQualidadeResultado,
  ResponseError
>;
