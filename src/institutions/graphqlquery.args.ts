import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber , IsOptional} from 'class-validator';

@ArgsType()
export class QueryArgs {
  @Field()
  @IsNumber()
  @IsOptional()
  longitude?: number

  @Field()
  @IsNumber()
  @IsOptional()
  latitude?: number

  @Field()
  @IsNumber()
  @IsOptional()
  km_range?: number
  
  @Field()
  @IsNumber()
  @IsOptional()
  page?: number

  @Field()
  @IsNumber()
  @IsOptional()
  limit?: number

}