export interface Paginated<T> {
  info: TablePagination;
  results: T[];
}

export interface TablePagination {
  page: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export interface TablePaginationParams {
  page: number;
  limit: number;
}

export interface TableSortParams {
  sort: string;
  direction: 'asc' | 'desc';
}
