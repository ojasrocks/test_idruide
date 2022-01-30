"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqInstitutionSchema = exports.GqInstitution = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
let GqInstitution = class GqInstitution {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Identifiant_de_l_etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Nom_etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Type_etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Statut_public_prive", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Adresse_1", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Adresse_2", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Adresse_3", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_postal", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_commune", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Nom_commune", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_departement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_academie", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_region", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Ecole_maternelle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Ecole_elementaire", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Voie_generale", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Voie_technologique", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Voie_professionnelle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Telephone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Fax", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Web", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Mail", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Restauration", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Hebergement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "ULIS", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Apprentissage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Segpa", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_arts", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_cinema", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_theatre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_sport", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_internationale", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Section_europeenne", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Lycee_Agricole", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Lycee_militaire", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Lycee_des_metiers", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Post_BAC", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Appartenance_Education_Prioritaire", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "GRETA", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "SIREN_SIRET", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Nombre_d_eleves", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Fiche_onisep", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "position", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Type_contrat_prive", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Libelle_departement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Libelle_academie", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Libelle_region", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "coordonnee_X", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "coordonnee_Y", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "epsg", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "nom_circonscription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "precision_localisation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "date_ouverture", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "date_maj_ligne", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "etat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "ministere_tutelle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "etablissement_multi_lignes", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "rpi_concentre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "rpi_disperse", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "code_nature", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "libelle_nature", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "Code_type_contrat_prive", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "PIAL", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "etablissement_mere", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "type_rattachement_etablissement_mere", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "code_bassin_formation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GqInstitution.prototype, "libelle_bassin_formation", void 0);
GqInstitution = __decorate([
    (0, graphql_1.ObjectType)()
], GqInstitution);
exports.GqInstitution = GqInstitution;
exports.GqInstitutionSchema = mongoose_1.SchemaFactory.createForClass(GqInstitution);
//# sourceMappingURL=graphqlinstitution.schema.js.map