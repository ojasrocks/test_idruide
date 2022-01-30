import { Document, Types } from 'mongoose';
export declare type InstitutionDocument = Institution & Document;
declare class Position {
    type: string;
    coordinates: Array<number>;
}
export declare class Institution {
    _id: Types.ObjectId;
    Identifiant_de_l_etablissement: string;
    Nom_etablissement: string;
    Type_etablissement: string;
    Statut_public_prive: string;
    Adresse_1: string;
    Adresse_2: string;
    Adresse_3: string;
    Code_postal: string;
    Code_commune: string;
    Nom_commune: string;
    Code_departement: string;
    Code_academie: string;
    Code_region: string;
    Ecole_maternelle: string;
    Ecole_elementaire: string;
    Voie_generale: string;
    Voie_technologique: string;
    Voie_professionnelle: string;
    Telephone: string;
    Fax: string;
    Web: string;
    Mail: string;
    Restauration: string;
    Hebergement: string;
    ULIS: string;
    Apprentissage: string;
    Segpa: string;
    Section_arts: string;
    Section_cinema: string;
    Section_theatre: string;
    Section_sport: string;
    Section_internationale: string;
    Section_europeenne: string;
    Lycee_Agricole: string;
    Lycee_militaire: string;
    Lycee_des_metiers: string;
    Post_BAC: string;
    Appartenance_Education_Prioritaire: string;
    GRETA: string;
    SIREN_SIRET: string;
    Nombre_d_eleves: string;
    Fiche_onisep: string;
    position: Position;
    Type_contrat_prive: string;
    Libelle_departement: string;
    Libelle_academie: string;
    Libelle_region: string;
    coordonnee_X: string;
    coordonnee_Y: string;
    epsg: string;
    nom_circonscription: string;
    latitude: string;
    longitude: string;
    precision_localisation: string;
    date_ouverture: string;
    date_maj_ligne: string;
    etat: string;
    ministere_tutelle: string;
    etablissement_multi_lignes: string;
    rpi_concentre: string;
    rpi_disperse: string;
    code_nature: string;
    libelle_nature: string;
    Code_type_contrat_prive: string;
    PIAL: string;
    etablissement_mere: string;
    type_rattachement_etablissement_mere: string;
    code_bassin_formation: string;
    libelle_bassin_formation: string;
}
export declare const InstitutionSchema: import("mongoose").Schema<Document<Institution, any, any>, import("mongoose").Model<Document<Institution, any, any>, any, any, any>, any, any>;
export {};
