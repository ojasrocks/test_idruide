import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InstitutionDocument = Institution & Document;

@Schema()
export class Institution {
     
    @Prop()
    Identifiant_de_l_etablissement: string
     
    @Prop()
    Nom_etablissement: string
     
    @Prop()
    Type_etablissement: string
     
    @Prop()
    Statut_public_prive: string
     
    @Prop()
    Adresse_1: string
     
    @Prop()
    Adresse_2: string
     
    @Prop()
    Adresse_3: string
     
    @Prop()
    'Code postal': string
     
    @Prop()
    Code_commune: string
     
    @Prop()
    Nom_commune: string
     
    @Prop()
    Code_departement: string
     
    @Prop()
    Code_academie: string
     
    @Prop()
    Code_region: string
     
    @Prop()
    Ecole_maternelle: string
     
    @Prop()
    Ecole_elementaire: string
     
    @Prop()
    Voie_generale: string
     
    @Prop()
    Voie_technologique: string
     
    @Prop()
    Voie_professionnelle: string
     
    @Prop()
    Telephone: string
     
    @Prop()
    Fax: string
     
    @Prop()
    Web: string
     
    @Prop()
    Mail: string
     
    @Prop()
    Restauration: string
     
    @Prop()
    Hebergement: string
     
    @Prop()
    ULIS: string
     
    @Prop()
    Apprentissage: string
     
    @Prop()
    Segpa: string
     
    @Prop()
    Section_arts: string
     
    @Prop()
    Section_cinema: string
     
    @Prop()
    Section_theatre: string
     
    @Prop()
    Section_sport: string
     
    @Prop()
    Section_internationale: string
     
    @Prop()
    Section_europeenne: string
     
    @Prop()
    Lycee_Agricole: string
     
    @Prop()
    Lycee_militaire: string
     
    @Prop()
    Lycee_des_metiers: string
     
    @Prop()
    Post_BAC: string
     
    @Prop()
    Appartenance_Education_Prioritaire: string
     
    @Prop()
    GRETA: string
     
    @Prop()
    SIREN_SIRET: string
     
    @Prop()
    Nombre_d_eleves: string
     
    @Prop()
    Fiche_onisep: string
     
    @Prop({type : Object, index: true})
    position: {
        "type": string,
        coordinates:[Number],
        }
     
    @Prop()
    Type_contrat_prive: string
     
    @Prop()
    Libelle_departement: string
     
    @Prop()
    Libelle_academie: string
     
    @Prop()
    Libelle_region: string
     
    @Prop()
    coordonnee_X: string
     
    @Prop()
    coordonnee_Y: string
     
    @Prop()
    epsg: string
     
    @Prop()
    nom_circonscription: string
     
    @Prop()
    latitude: string
     
    @Prop()
    longitude: string
     
    @Prop()
    precision_localisation: string
     
    @Prop()
    date_ouverture: string
     
    @Prop()
    date_maj_ligne: string
     
    @Prop()
    etat: string
     
    @Prop()
    ministere_tutelle: string
     
    @Prop()
    etablissement_multi_lignes: string
     
    @Prop()
    rpi_concentre: string
     
    @Prop()
    rpi_disperse: string
     
    @Prop()
    code_nature: string
     
    @Prop()
    libelle_nature: string
     
    @Prop()
    Code_type_contrat_prive: string
     
    @Prop()
    PIAL: string
     
    @Prop()
    etablissement_mere: string
     
    @Prop()
    type_rattachement_etablissement_mere: string
     
    @Prop()
    code_bassin_formation: string
     
    @Prop()
    libelle_bassin_formation: string
}

export const InstitutionSchema = SchemaFactory.createForClass(Institution);
