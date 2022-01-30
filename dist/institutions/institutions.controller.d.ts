import { inputArgs } from './input.schema';
import { InstitutionsService } from './institutions.service';
export declare class InstitutionsController {
    private readonly service;
    constructor(service: InstitutionsService);
    getAll(args: inputArgs): Promise<{
        data: {}[];
        total: number;
        page: number;
        last_page: number;
    }>;
    find(args: inputArgs): Promise<{
        data: {}[];
        total: number;
        page: number;
        last_page: number;
    }>;
}
