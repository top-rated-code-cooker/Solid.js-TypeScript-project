export enum ISortDirection {
  "asc",
  "desc",
}

export interface IPagination {
  pageNo?: number;
  pageSize?: number;
  totalSize?: number;
  totalPages?: number;
  total?: number;
}

export interface ISort {
  onSort: (a: any, b: any, c: any) => number;
}

export interface IHeader {
  header: string;
  accessor?: string;
  render?: (props: any) => any;
  cellRenderer?: (props: any) => any;
  sort?: boolean | ISort;
  hasHorizontalScrollbar?: boolean;
}

export interface ITableProps {
  data: any[];
  headers: IHeader[];
  className?: string;
  wrapperClass?: string;
  defaultSortDirection?: [string, ISortDirection];
  pagination?: IPagination;
  fixedHeaders?: boolean;
  loading?: boolean;
  hidePagination?: boolean;
}
