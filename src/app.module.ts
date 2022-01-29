import { Module } from '@nestjs/common';
import { InstitutionsModule } from './institutions/institutions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/',{
      dbName:'education'
    }),
    InstitutionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

/**
 * GraphQLModule.forRoot({
        autoSchemaFile: true,
        playground: true,
        sortSchema: true,
      }),
 */