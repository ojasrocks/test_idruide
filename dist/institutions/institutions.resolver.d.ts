import { InstitutionsService } from './institutions.service';
import { AllArgs, QueryArgs } from './graphqlquery.args';
export declare class InstitutionsResolver {
    private readonly service;
    constructor(service: InstitutionsService);
    getAll(arg: AllArgs): Promise<any>;
    find(arg: QueryArgs): Promise<any>;
}
