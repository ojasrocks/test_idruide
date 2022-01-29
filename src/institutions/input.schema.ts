import { IsNumberString , IsOptional } from 'class-validator';

export class inputArgs {

    @IsNumberString()
    @IsOptional()
    longitude?: string

    @IsNumberString()
    @IsOptional()
    latitude?: string

    @IsNumberString()
    @IsOptional()
    km_range?: string
    
    @IsNumberString()
    @IsOptional()
    page?: string

    @IsNumberString()
    @IsOptional()
    limit?: string

}