import { Model } from 'mongoose';
import { Institution, InstitutionDocument } from './institutions.schema';
export declare class InstitutionsService {
    private readonly institution;
    constructor(institution: Model<InstitutionDocument>);
    private readonly logger;
    find(options: any): import("mongoose").Query<(Institution & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Institution & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, InstitutionDocument>;
    count(options: any): Promise<number>;
}
