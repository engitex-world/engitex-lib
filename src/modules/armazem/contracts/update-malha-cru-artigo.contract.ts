import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

export type UpdateMalhaCruArtigoRequest = {
  quantidadeRecebida: number;
};

export type UpdateMalhaCruArtigoResponse = ServerActionResult<{ success: boolean }, ResponseError>;
