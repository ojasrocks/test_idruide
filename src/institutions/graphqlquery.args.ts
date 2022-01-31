import { ArgsType, Field, Float, Int } from '@nestjs/graphql';
import { IsNumber , IsArray, IsOptional} from 'class-validator';

@ArgsType()
export class AllArgs{
  @Field(type => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  page?: number

  @Field(type => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  limit?: number
}


@ArgsType()
export class QueryArgs extends AllArgs {
  
  @Field(type =>[[String,String]], { nullable: true })
  @IsOptional()
  @IsArray()
  filter?: [[string,string]]

  @Field(type => Float,  { nullable: true })
  @IsOptional()
  @IsNumber()
  longitude?: number

  @Field(type => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  latitude?: number

  @Field(type => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  range?: number
}

