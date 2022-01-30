
import {
    Body,
    Controller,
    Get,
    Post,
    Query
  } from '@nestjs/common';
import { inputArgs, postArgs } from './input.schema';
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

    @Post('find')
    async find(@Body() args : postArgs){
        let opt = {};
        // if no args provided it behaves like getAll()
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        if (args.filter) opt = args.filter;
        // In case position is provided in query
        // a GeoJSON        
        
        if (args.latitude && args.longitude && Math.abs(args.latitude)<= 180 && Math.abs(args.longitude) <= 180)
        {
            let shift = 2;
            if (args.range) shift = Math.abs(args.range)
            
            opt = {...opt,
                position: {
                    $geoWithin : {
                        $box: [
                            [args.latitude-shift,args.longitude-shift],
                            [args.latitude+shift,args.longitude+shift]
                        ]
                    }
                }
            }
        }
        
        const query = this.service.find(opt).select(selected);

        const page : number = Math.round(Math.abs(args.page)) || 1;
        const limit = Math.round(Math.abs(args.limit)) || 10;
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
