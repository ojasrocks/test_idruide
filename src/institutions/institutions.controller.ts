
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

    
    @Get('all')
    async getAll(@Query() args : inputArgs) {
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        const query = this.service.find({}).select(selected);

        const page : number = parseInt(args.page) || 1;
        const limit = parseInt(args.limit) || 10;
        const total = await this.service.count({});
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

    @Get('find')
    async find(@Query() args : inputArgs){
        let opt = {};
        // if no args provided it behaves like getAll()
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        
        // In case position is provided in query
        // a GeoJSON        
        
        if (args.latitude && args.longitude && Math.abs(parseFloat(args.latitude))<= 180 && Math.abs(parseFloat(args.longitude)) <= 180)
        {
            let shift = 2;
            if (args.range) shift = Math.abs(parseFloat(args.range)) 
            
            opt = {...opt,
                position: {
                    $geoWithin : {
                        $box: [
                            [parseFloat(args.latitude)-shift,parseFloat(args.longitude)-shift],
                            [parseFloat(args.latitude)+shift,parseFloat(args.longitude)+shift]
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
