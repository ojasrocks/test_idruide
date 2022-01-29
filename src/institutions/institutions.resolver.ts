import { Resolver , Query, Args } from '@nestjs/graphql';
import { GqInstitution } from './graphqlinstitution.schema';
import { InstitutionsService } from './institutions.service';
import { QueryArgs } from './graphqlquery.args'

@Resolver()
export class InstitutionsResolver {
    constructor(private readonly service: InstitutionsService) {}

    @Query(returns => [GqInstitution])
    async graphreq(@Args() arg:QueryArgs): Promise<any> {
        let opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code postal',
            'Type_etablissement',
            'Libelle_region'
        ]
        
        // In case position is provided in query
        // a GeoJSON 

        if (arg.latitude && arg.longitude){
            const position = [arg.latitude, arg.longitude]
            let range = 20000; // default range 20 km
            if (arg.km_range) range = Math.round(arg.km_range*1000) // reference unit in input 1 km

            opt = {
                position: {
                    $near : {
                    $geometry: {
                    type: "Point" ,
                    coordinates: position
                },
                    $maxDistance: range,
                    $minDistance: 0
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
