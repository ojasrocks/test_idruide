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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const institutions_schema_1 = require("./institutions.schema");
const institutions_service_1 = require("./institutions.service");
const graphqlquery_args_1 = require("./graphqlquery.args");
const response_schema_1 = require("./response.schema");
let InstitutionsResolver = class InstitutionsResolver {
    constructor(service) {
        this.service = service;
    }
    async getAll(arg) {
        const opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ];
        const query = this.service.find(opt).select(selected);
        const page = arg.page || 1;
        const limit = arg.limit || 10;
        const total = await this.service.count(opt);
        const temp_data = await query.skip((page - 1) * limit).limit(limit).exec();
        const data = temp_data.map(element => {
            let obj = {};
            Object.entries(element).forEach(([key, value]) => {
                if (key === "_doc") {
                    Object.entries(value).forEach(([keyy, valuee]) => {
                        if (keyy !== "_id") {
                            obj[keyy] = valuee;
                        }
                    });
                }
            });
            return obj;
        });
        return {
            data,
            total,
            page,
            last_page: Math.ceil(total / limit)
        };
    }
    async find(arg) {
        let opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ];
        if (arg.filter) {
            arg.filter.forEach(([key, value]) => {
                if (key !== "position")
                    opt[key] = value;
                else {
                    const inverse = value.replace(/'+/g, "??").replace(/"+/g, "'").replace(/??+/g, '"');
                    opt[key] = JSON.parse(inverse);
                }
            });
        }
        if (arg.latitude && arg.longitude && Math.abs(arg.latitude) <= 180 && Math.abs(arg.longitude) <= 180) {
            let shift = 2;
            if (arg.range)
                shift = Math.abs(arg.range);
            opt = Object.assign(Object.assign({}, opt), { position: {
                    $geoWithin: {
                        $box: [
                            [arg.latitude - shift, arg.longitude - shift],
                            [arg.latitude + shift, arg.longitude + shift]
                        ]
                    }
                } });
        }
        const query = this.service.find(opt).select(selected);
        const page = arg.page || 1;
        const limit = arg.limit || 10;
        const total = await this.service.count(opt);
        const temp_data = await query.skip((page - 1) * limit).limit(limit).exec();
        const data = temp_data.map(element => {
            let obj = {};
            Object.entries(element).forEach(([key, value]) => {
                if (key === "_doc") {
                    Object.entries(value).forEach(([keyy, valuee]) => {
                        if (keyy !== "_id") {
                            obj[keyy] = valuee;
                        }
                    });
                }
            });
            return obj;
        });
        return {
            data,
            total,
            page,
            last_page: Math.ceil(total / limit)
        };
    }
};
__decorate([
    (0, graphql_1.Query)(returns => response_schema_1.QueryResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphqlquery_args_1.AllArgs]),
    __metadata("design:returntype", Promise)
], InstitutionsResolver.prototype, "getAll", null);
__decorate([
    (0, graphql_1.Query)(returns => response_schema_1.QueryResponse),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphqlquery_args_1.QueryArgs]),
    __metadata("design:returntype", Promise)
], InstitutionsResolver.prototype, "find", null);
InstitutionsResolver = __decorate([
    (0, graphql_1.Resolver)(returns => institutions_schema_1.Institution),
    __metadata("design:paramtypes", [institutions_service_1.InstitutionsService])
], InstitutionsResolver);
exports.InstitutionsResolver = InstitutionsResolver;
//# sourceMappingURL=institutions.resolver.js.map