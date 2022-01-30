import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber , IsOptional} from 'class-validator';

@ArgsType()
export class QueryArgs {
  
  @Field()
  @IsOptional()
  @IsNumber()
  longitude?: number

  @Field()
  @IsOptional()
  @IsNumber()
  latitude?: number

  @Field()
  @IsOptional()
  @IsNumber()
  km_radius?: number
  
  @Field()
  @IsOptional()
  @IsNumber()
  page?: number

  @Field()
  @IsOptional()
  @IsNumber()
  limit?: number

}