import { IsNumberString , IsObject, IsOptional , IsNumber } from 'class-validator';
import { Institution } from './institutions.schema';

export class inputArgs {

    @IsNumberString()
    @IsOptional()
    page?: string

    @IsNumberString()
    @IsOptional()
    limit?: string

}

export class postArgs {

    @IsObject()
    @IsOptional()
    filter?: Institution 

    @IsNumber()
    @IsOptional()
    longitude?: number

    @IsNumber()
    @IsOptional()
    latitude?: number

    @IsNumber()
    @IsOptional()
    range?: number
    
    @IsNumber()
    @IsOptional()
    page?: number

    @IsNumber()
    @IsOptional()
    limit?: number

}