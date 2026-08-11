import { ResponseError } from '../enums';

export type ServerActionResult<TData, TError = ResponseError> =
  | { ok: true; data: TData }
  | { ok: false; data: { error: TError; message: unknown } };
