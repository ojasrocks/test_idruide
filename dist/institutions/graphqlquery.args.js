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
exports.QueryArgs = exports.AllArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let AllArgs = class AllArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllArgs.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AllArgs.prototype, "limit", void 0);
AllArgs = __decorate([
    (0, graphql_1.ArgsType)()
], AllArgs);
exports.AllArgs = AllArgs;
let QueryArgs = class QueryArgs extends AllArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [[String, String]]),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], QueryArgs.prototype, "filter", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QueryArgs.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QueryArgs.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QueryArgs.prototype, "range", void 0);
QueryArgs = __decorate([
    (0, graphql_1.ArgsType)()
], QueryArgs);
exports.QueryArgs = QueryArgs;
//# sourceMappingURL=graphqlquery.args.js.map