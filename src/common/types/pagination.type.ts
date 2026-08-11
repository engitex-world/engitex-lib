export type PaginationResponseInfo = {
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  prev: string | null;
  next: string | null;
  tabs?: Record<string, number>;
};
