import { Injectable , Logger} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Institution , InstitutionDocument} from './institutions.schema';


@Injectable()
export class InstitutionsService {
    constructor(@InjectModel(Institution.name) private readonly institution: Model<InstitutionDocument>) {}

    private readonly logger = new Logger(InstitutionsService.name);

    find(options : any){
        this.logger.log(`Searching...`);
        return this.institution.find(options);
    }
    
    count(options : any){
        return this.institution.count(options).exec();
    }

}
