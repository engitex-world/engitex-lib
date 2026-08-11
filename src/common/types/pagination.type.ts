export type PaginationInfo = {
  page: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  prev: string | null;
  next: string | null;
  tabs?: Record<string, number>;
};

export type Paginated<T> = {
  info: PaginationInfo;
  results: T[];
};
