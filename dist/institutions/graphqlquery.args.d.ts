export declare class AllArgs {
    page?: number;
    limit?: number;
}
export declare class QueryArgs extends AllArgs {
    filter?: [[string, string]];
    longitude?: number;
    latitude?: number;
    range?: number;
}
