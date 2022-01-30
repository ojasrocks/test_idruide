import { Resolver , Query, Args } from '@nestjs/graphql';
import { Institution } from './institutions.schema';
import { InstitutionsService } from './institutions.service';
import { QueryArgs } from './graphqlquery.args'

@Resolver()
export class InstitutionsResolver {
    constructor(private readonly service: InstitutionsService) {}

    @Query(returns => [Institution])
    async graphreq(@Args() arg:QueryArgs): Promise<any> {
        let opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        // In case position is provided in query
        // a GeoJSON 

        if (arg.latitude && arg.longitude && arg.latitude > -180 && arg.latitude < 180 && arg.longitude > -180 && arg.longitude<180)
        {
            let range = 20000; // default range 20 km
            if (arg.km_radius) range = Math.round(arg.km_radius*1000) // reference unit in input 1 km

            opt = {
                position: {
                    $geoWithin : {
                        $box: [
                            [arg.latitude-range,arg.longitude-range],
                            [arg.latitude+range,arg.longitude+range]
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
