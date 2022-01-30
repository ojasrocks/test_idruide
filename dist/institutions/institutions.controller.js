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
exports.InstitutionsController = void 0;
const common_1 = require("@nestjs/common");
const input_schema_1 = require("./input.schema");
const institutions_service_1 = require("./institutions.service");
let InstitutionsController = class InstitutionsController {
    constructor(service) {
        this.service = service;
    }
    async getAll(args) {
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ];
        const query = this.service.find({}).select(selected);
        const page = parseInt(args.page) || 1;
        const limit = parseInt(args.limit) || 10;
        const total = await this.service.count({});
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
    async find(args) {
        let opt = {};
        const selected = [
            'Identifiant_de_l_etablissement',
            'Code_postal',
            'Type_etablissement',
            'Libelle_region'
        ];
        if (args.filter)
            opt = args.filter;
        if (args.latitude && args.longitude && Math.abs(parseFloat(args.latitude)) <= 180 && Math.abs(parseFloat(args.longitude)) <= 180) {
            let shift = 2;
            if (args.range)
                shift = Math.abs(parseFloat(args.range));
            opt = Object.assign(Object.assign({}, opt), { position: {
                    $geoWithin: {
                        $box: [
                            [parseFloat(args.latitude) - shift, parseFloat(args.longitude) - shift],
                            [parseFloat(args.latitude) + shift, parseFloat(args.longitude) + shift]
                        ]
                    }
                } });
        }
        const query = this.service.find(opt).select(selected);
        const page = parseInt(args.page) || 1;
        const limit = parseInt(args.limit) || 10;
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
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_schema_1.inputArgs]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('find'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_schema_1.inputArgs]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "find", null);
InstitutionsController = __decorate([
    (0, common_1.Controller)('institutions'),
    __metadata("design:paramtypes", [institutions_service_1.InstitutionsService])
], InstitutionsController);
exports.InstitutionsController = InstitutionsController;
//# sourceMappingURL=institutions.controller.js.map