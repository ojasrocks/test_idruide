import { InstitutionsService } from './institutions.service';
import { QueryArgs } from './graphqlquery.args';
export declare class InstitutionsResolver {
    private readonly service;
    constructor(service: InstitutionsService);
    graphreq(arg: QueryArgs): Promise<any>;
}
