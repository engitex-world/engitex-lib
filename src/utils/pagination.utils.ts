export type PaginationOptions = {
  page?: number;
  pageSize?: number;
  url: URL;
};

export type SortOptions = {
  sort: string;
  direction: 'ASC' | 'DESC';
};

type PaginateResponseProps = {
  totalCount: number;
  results: any[];
  paginationOpts: PaginationOptions;
  tabsInfo?: Record<string, number>;
};

type QueryPaginationOpts = {
  skip: number;
  take: number;
};

type ResponseInfo = {
  totalElements: number;
  totalPages: number;
  page: number;
  pageSize: number;
  prev: string;
  next: string;
  tabs?: Record<string, number>;
};

export function getDefaultPaginationOptions(
  options: PaginationOptions
): PaginationOptions {
  return {
    page: options.page ? +options.page : 1,
    pageSize: options.pageSize ? +options.pageSize : 25,
    url: options.url,
  };
}

export function getQueryPaginationOpts(
  options: PaginationOptions
): QueryPaginationOpts {
  const { page, pageSize } = options;

  return {
    skip: (page - 1) * pageSize,
    take: pageSize,
  };
}

export function paginateResponse({
  totalCount,
  results,
  paginationOpts,
  tabsInfo,
}: PaginateResponseProps): { info: ResponseInfo; results: any[] } {
  const { page, pageSize, url } = paginationOpts;

  const totalPages = Math.ceil(totalCount / pageSize);
  const info = {
    totalElements: totalCount,
    totalPages: totalPages,
    page: page,
    pageSize: pageSize,
    next: page < totalPages ? setUrlPage(url, page + 1) : null,
    prev: page > 1 ? setUrlPage(url, page - 1) : null,
    tabs: tabsInfo,
  };

  return { info, results };
}

function setUrlPage(url: URL, page: number): string {
  const urlParams = new URLSearchParams(url.search);
  urlParams.set('page', page.toString());
  url.search = urlParams.toString();

  return url.search;
}
