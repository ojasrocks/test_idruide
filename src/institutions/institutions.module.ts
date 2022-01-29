import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { Institution, InstitutionSchema } from './institutions.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionsResolver } from './institutions.resolver';


@Module({
  providers: [InstitutionsService],
  controllers: [InstitutionsController],
  imports: [
    MongooseModule.forFeature([{ name: Institution.name, schema: InstitutionSchema }]),
  ]
})
export class InstitutionsModule {}

// ,InstitutionsResolver