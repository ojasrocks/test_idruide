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
var InstitutionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const institutions_schema_1 = require("./institutions.schema");
let InstitutionsService = InstitutionsService_1 = class InstitutionsService {
    constructor(institution) {
        this.institution = institution;
        this.logger = new common_1.Logger(InstitutionsService_1.name);
    }
    find(options) {
        this.logger.log(`Searching`);
        return this.institution.find(options);
    }
    count(options) {
        return this.institution.count(options).exec();
    }
};
InstitutionsService = InstitutionsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(institutions_schema_1.Institution.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InstitutionsService);
exports.InstitutionsService = InstitutionsService;
//# sourceMappingURL=institutions.service.js.map