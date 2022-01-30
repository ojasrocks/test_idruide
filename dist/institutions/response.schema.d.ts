import { DataResponse } from './data.schema';
export declare class QueryResponse {
    data?: Array<DataResponse>;
    total?: number;
    page?: number;
    last_page?: number;
}
