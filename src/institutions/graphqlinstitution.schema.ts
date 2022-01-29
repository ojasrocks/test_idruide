import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Point } from 'geojson';

export type GqInstitutionDocument = GqInstitution & Document;

@ObjectType()
export class GqInstitution {
     
    @Field()
    Identifiant_de_l_etablissement: string
     
    @Field()
    Nom_etablissement: string
     
    @Field()
    Type_etablissement: string
     
    @Field()
    Statut_public_prive: string
     
    @Field()
    Adresse_1: string
     
    @Field()
    Adresse_2: string
     
    @Field()
    Adresse_3: string
     
    @Field()
    'Code postal': string
     
    @Field()
    Code_commune: string
     
    @Field()
    Nom_commune: string
     
    @Field()
    Code_departement: string
     
    @Field()
    Code_academie: string
     
    @Field()
    Code_region: string
     
    @Field()
    Ecole_maternelle: string
     
    @Field()
    Ecole_elementaire: string
     
    @Field()
    Voie_generale: string
     
    @Field()
    Voie_technologique: string
     
    @Field()
    Voie_professionnelle: string
     
    @Field()
    Telephone: string
     
    @Field()
    Fax: string
     
    @Field()
    Web: string
     
    @Field()
    Mail: string
     
    @Field()
    Restauration: string
     
    @Field()
    Hebergement: string
     
    @Field()
    ULIS: string
     
    @Field()
    Apprentissage: string
     
    @Field()
    Segpa: string
     
    @Field()
    Section_arts: string
     
    @Field()
    Section_cinema: string
     
    @Field()
    Section_theatre: string
     
    @Field()
    Section_sport: string
     
    @Field()
    Section_internationale: string
     
    @Field()
    Section_europeenne: string
     
    @Field()
    Lycee_Agricole: string
     
    @Field()
    Lycee_militaire: string
     
    @Field()
    Lycee_des_metiers: string
     
    @Field()
    Post_BAC: string
     
    @Field()
    Appartenance_Education_Prioritaire: string
     
    @Field()
    GRETA: string
     
    @Field()
    SIREN_SIRET: string
     
    @Field()
    Nombre_d_eleves: string
     
    @Field()
    Fiche_onisep: string
     
    @Field()
    position: string
     
    @Field()
    Type_contrat_prive: string
     
    @Field()
    Libelle_departement: string
     
    @Field()
    Libelle_academie: string
     
    @Field()
    Libelle_region: string
     
    @Field()
    coordonnee_X: string
     
    @Field()
    coordonnee_Y: string
     
    @Field()
    epsg: string
     
    @Field()
    nom_circonscription: string
     
    @Field()
    latitude: string
     
    @Field()
    longitude: string
     
    @Field()
    precision_localisation: string
     
    @Field()
    date_ouverture: string
     
    @Field()
    date_maj_ligne: string
     
    @Field()
    etat: string
     
    @Field()
    ministere_tutelle: string
     
    @Field()
    etablissement_multi_lignes: string
     
    @Field()
    rpi_concentre: string
     
    @Field()
    rpi_disperse: string
     
    @Field()
    code_nature: string
     
    @Field()
    libelle_nature: string
     
    @Field()
    Code_type_contrat_prive: string
     
    @Field()
    PIAL: string
     
    @Field()
    etablissement_mere: string
     
    @Field()
    type_rattachement_etablissement_mere: string
     
    @Field()
    code_bassin_formation: string
     
    @Field()
    libelle_bassin_formation: string
}

export const GqInstitutionSchema = SchemaFactory.createForClass(GqInstitution);
