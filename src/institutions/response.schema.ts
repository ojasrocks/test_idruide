import { ObjectType, Field } from '@nestjs/graphql';
import { IsNumber , IsOptional} from 'class-validator';
import { DataResponse } from './data.schema';

@ObjectType()
export class QueryResponse {
  
  @Field(()=> [DataResponse] )
  @IsOptional()
  @IsNumber()
  data?: Array<DataResponse>

  @Field(()=> Number)
  @IsOptional()
  @IsNumber()
  total?: number
  
  @Field(()=> Number)
  @IsOptional()
  @IsNumber()
  page?: number

  @Field(()=> Number)
  @IsOptional()
  @IsNumber()
  last_page?: number

}