export type ServerActionResult<TData, TError = unknown> =
  | { ok: true; data: TData }
  | { ok: false; data: TError };
