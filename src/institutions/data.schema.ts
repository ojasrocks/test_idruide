import { ObjectType, Field } from '@nestjs/graphql';
import { IsString} from 'class-validator';

@ObjectType()
export class DataResponse {
  
  @Field(()=> String)
  @IsString()
  Identifiant_de_l_etablissement?: string

  @Field(()=> String)
  @IsString()
  Type_etablissement?: string
  
  @Field(()=> String)
  @IsString()
  Libelle_region?: string

  @Field(()=> String)
  @IsString()
  Code_postal?: string

}