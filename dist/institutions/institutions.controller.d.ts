import { inputArgs } from './input.schema';
import { InstitutionsService } from './institutions.service';
export declare class InstitutionsController {
    private readonly service;
    constructor(service: InstitutionsService);
    requested(args: inputArgs): Promise<{
        data: {}[];
        total: number;
        page: number;
        last_page: number;
    }>;
}
