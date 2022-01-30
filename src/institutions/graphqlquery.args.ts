import { ArgsType, Field, Float, Int } from '@nestjs/graphql';
import { IsNumber , IsArray, IsOptional} from 'class-validator';

@ArgsType()
export class AllArgs{
  @Field(()=> Int)
  @IsOptional()
  @IsNumber()
  page?: number

  @Field(()=> Int)
  @IsOptional()
  @IsNumber()
  limit?: number
}


@ArgsType()
export class QueryArgs extends AllArgs {
  
  @Field(()=>[[String,String]])
  @IsOptional()
  @IsArray()
  filter?: [[string,string]]

  @Field(()=> Float)
  @IsOptional()
  @IsNumber()
  longitude?: number

  @Field(()=> Float)
  @IsOptional()
  @IsNumber()
  latitude?: number

  @Field(()=> Float)
  @IsOptional()
  @IsNumber()
  range?: number
}

