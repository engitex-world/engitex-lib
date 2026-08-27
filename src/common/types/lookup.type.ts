/**
 * O lookup é usado normalmente em selects, que implicam ter `id` + `nome`
 * `TData` permite a expor PEQUENOS dados adicionais que nao justifiquem um get-by-id
 */
export type LookupOption<TData = unknown> = {
  id: number;
  nome: string;
} & TData;
