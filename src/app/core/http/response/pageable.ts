import { Sort } from "./sort";

export interface Pageable {
    sort: Sort,
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

