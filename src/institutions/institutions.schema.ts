import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InstitutionDocument = Institution & Document;

@ObjectType()
class Position{
        @Field(() => String)
        type: string
        @Field(()=> [Float])
        coordinates: Array<number>
}

@ObjectType()
@Schema()
export class Institution {
     
    @Field(() => String)
    _id: Types.ObjectId;
    
    @Field(() => String)
    createdAt: string;

    @Field(() => String)
    @Prop()
    Identifiant_de_l_etablissement: string
     
    @Field(() => String)
    @Prop()
    Nom_etablissement: string
     
    @Field(() => String)
    @Prop()
    Type_etablissement: string
     
    @Field(() => String)
    @Prop()
    Statut_public_prive: string
     
    @Field(() => String)
    @Prop()
    Adresse_1: string
     
    @Field(() => String)
    @Prop()
    Adresse_2: string
     
    @Field(() => String)
    @Prop()
    Adresse_3: string
     
    @Field(() => String)
    @Prop()
    Code_postal: string
     
    @Field(() => String)
    @Prop()
    Code_commune: string
     
    @Field(() => String)
    @Prop()
    Nom_commune: string
     
    @Field(() => String)
    @Prop()
    Code_departement: string
     
    @Field(() => String)
    @Prop()
    Code_academie: string
     
    @Field(() => String)
    @Prop()
    Code_region: string
     
    @Field(() => String)
    @Prop()
    Ecole_maternelle: string
     
    @Field(() => String)
    @Prop()
    Ecole_elementaire: string
     
    @Field(() => String)
    @Prop()
    Voie_generale: string
     
    @Field(() => String)
    @Prop()
    Voie_technologique: string
     
    @Field(() => String)
    @Prop()
    Voie_professionnelle: string
     
    @Field(() => String)
    @Prop()
    Telephone: string
     
    @Field(() => String)
    @Prop()
    Fax: string
     
    @Field(() => String)
    @Prop()
    Web: string
     
    @Field(() => String)
    @Prop()
    Mail: string
     
    @Field(() => String)
    @Prop()
    Restauration: string
     
    @Field(() => String)
    @Prop()
    Hebergement: string
     
    @Field(() => String)
    @Prop()
    ULIS: string
     
    @Field(() => String)
    @Prop()
    Apprentissage: string
     
    @Field(() => String)
    @Prop()
    Segpa: string
     
    @Field(() => String)
    @Prop()
    Section_arts: string
     
    @Field(() => String)
    @Prop()
    Section_cinema: string
     
    @Field(() => String)
    @Prop()
    Section_theatre: string
     
    @Field(() => String)
    @Prop()
    Section_sport: string
     
    @Field(() => String)
    @Prop()
    Section_internationale: string
     
    @Field(() => String)
    @Prop()
    Section_europeenne: string
     
    @Field(() => String)
    @Prop()
    Lycee_Agricole: string
     
    @Field(() => String)
    @Prop()
    Lycee_militaire: string
     
    @Field(() => String)
    @Prop()
    Lycee_des_metiers: string
     
    @Field(() => String)
    @Prop()
    Post_BAC: string
     
    @Field(() => String)
    @Prop()
    Appartenance_Education_Prioritaire: string
     
    @Field(() => String)
    @Prop()
    GRETA: string
     
    @Field(() => String)
    @Prop()
    SIREN_SIRET: string
     
    @Field(() => String)
    @Prop()
    Nombre_d_eleves: string
     
    @Field(() => String)
    @Prop()
    Fiche_onisep: string
     
    @Field(() => Position)
    @Prop({type : Object, index: true})
    position: Position
     
    @Field(() => String)
    @Prop()
    Type_contrat_prive: string
     
    @Field(() => String)
    @Prop()
    Libelle_departement: string
     
    @Field(() => String)
    @Prop()
    Libelle_academie: string
     
    @Field(() => String)
    @Prop()
    Libelle_region: string
     
    @Field(() => String)
    @Prop()
    coordonnee_X: string
     
    @Field(() => String)
    @Prop()
    coordonnee_Y: string
     
    @Field(() => String)
    @Prop()
    epsg: string
     
    @Field(() => String)
    @Prop()
    nom_circonscription: string
     
    @Field(() => String)
    @Prop()
    latitude: string
     
    @Field(() => String)
    @Prop()
    longitude: string
     
    @Field(() => String)
    @Prop()
    precision_localisation: string
     
    @Field(() => String)
    @Prop()
    date_ouverture: string
     
    @Field(() => String)
    @Prop()
    date_maj_ligne: string
     
    @Field(() => String)
    @Prop()
    etat: string
     
    @Field(() => String)
    @Prop()
    ministere_tutelle: string
     
    @Field(() => String)
    @Prop()
    etablissement_multi_lignes: string
     
    @Field(() => String)
    @Prop()
    rpi_concentre: string
     
    @Field(() => String)
    @Prop()
    rpi_disperse: string
     
    @Field(() => String)
    @Prop()
    code_nature: string
     
    @Field(() => String)
    @Prop()
    libelle_nature: string
     
    @Field(() => String)
    @Prop()
    Code_type_contrat_prive: string
     
    @Field(() => String)
    @Prop()
    PIAL: string
     
    @Field(() => String)
    @Prop()
    etablissement_mere: string
     
    @Field(() => String)
    @Prop()
    type_rattachement_etablissement_mere: string
     
    @Field(() => String)
    @Prop()
    code_bassin_formation: string
     
    @Field(() => String)
    @Prop()
    libelle_bassin_formation: string
}

export const InstitutionSchema = SchemaFactory.createForClass(Institution);
