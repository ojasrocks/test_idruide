import { Resolver , Query, Args } from '@nestjs/graphql';
import { Institution } from './institutions.schema';
import { InstitutionsService } from './institutions.service';
import { AllArgs, QueryArgs } from './graphqlquery.args'
import { QueryResponse } from './response.schema'
import { DataResponse } from './data.schema'

@Resolver(returns => Institution)
export class InstitutionsResolver {
    constructor(private readonly service: InstitutionsService) {}

    @Query(returns => QueryResponse)
    async getAll(@Args() arg:AllArgs): Promise<any> {
        const opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        const query = this.service.find(opt).select(selected);

        const page : number = arg.page || 1;
        const limit: number = arg.limit || 10;
        const total: number = await this.service.count(opt);

        const temp_data = await query.skip((page-1) * limit).limit(limit).exec();
        const data : Array<DataResponse> = temp_data.map(element => {
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
            page ,
            last_page : Math.ceil(total / limit)
        }

    }


    @Query(returns => QueryResponse)
    async find(@Args() arg:QueryArgs): Promise<any> {
        let opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        // In case position is provided in query
        // a GeoJSON 
        
        if (arg.latitude && arg.longitude && Math.abs(arg.latitude) <= 180 &&  Math.abs(arg.longitude) <= 180)
        {
            let shift = 2; 
            if (arg.range) shift = Math.abs(arg.range) 

            opt = {...opt,
                position: {
                    $geoWithin : {
                        $box: [
                            [arg.latitude-shift,arg.longitude-shift],
                            [arg.latitude+shift,arg.longitude+shift]
                        ]
                    }
                }
            }
        }

        const query = this.service.find(opt).select(selected);

        const page : number = arg.page || 1;
        const limit: number = arg.limit || 10;
        const total: number = await this.service.count(opt);

        const temp_data = await query.skip((page-1) * limit).limit(limit).exec();
        const data : Array<DataResponse> = temp_data.map(element => {
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
            page ,
            last_page : Math.ceil(total / limit)
        }
    }
}
