
import {
    Controller,
    Get,
    Query
  } from '@nestjs/common';
import { inputArgs } from './input.schema';
import { InstitutionsService } from './institutions.service';

@Controller('institutions')
export class InstitutionsController {
    
    constructor(private readonly service: InstitutionsService) {}

    @Get('api')
    async requested(@Query() args : inputArgs){
        let opt = {};
        
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        // In case position is provided in query
        // a GeoJSON        
        
        if (args.latitude && args.longitude && parseFloat(args.latitude)> -180 && parseFloat(args.latitude) < 180 && parseFloat(args.longitude) > -180 && parseFloat(args.longitude)<180)
        {
            let range = 20000; // default range 20 km
            if (args.km_radius) range = Math.round(parseFloat(args.km_radius)*1000) 
            
            opt = {
                position: {
                    $geoWithin : {
                        $box: [
                            [parseFloat(args.latitude)-range,parseFloat(args.longitude)-range],
                            [parseFloat(args.latitude)+range,parseFloat(args.longitude)+range]
                        ]
                    }
                }
            }
        }
        
        const query = this.service.find(opt).select(selected);

        const page : number = parseInt(args.page) || 1;
        const limit = parseInt(args.limit) || 10;
        const total = await this.service.count(opt);
        const temp_data = await query.skip((page-1) * limit).limit(limit).exec();
        const data = temp_data.map(element => {
            let obj = {};
            Object.entries(element).forEach(([key, value]) => {if (key === "_doc") {
                Object.entries(value).forEach(([keyy, valuee]) => {
                    if (keyy !== "_id"){
                        obj[keyy] = valuee
                    }
                } )
            }})
            return obj
        }) 
        

        return {
            data,
            total,
            page,
            last_page : Math.ceil(total / limit)
        }
    }

}
