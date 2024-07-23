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
exports.InstrumentoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const instrumento_service_1 = require("./instrumento.service");
const create_instrumento_input_1 = require("./dto/create-instrumento.input");
const update_instrumento_input_1 = require("./dto/update-instrumento.input");
const instrumento_entity_1 = require("./entities/instrumento.entity");
let InstrumentoResolver = class InstrumentoResolver {
    constructor(instrumentoService) {
        this.instrumentoService = instrumentoService;
    }
    createInstrumento(createInstrumentoInput) {
        return this.instrumentoService.create(createInstrumentoInput);
    }
    findAll() {
        return this.instrumentoService.findAll();
    }
    findOne(id) {
        return this.instrumentoService.findOne(id);
    }
    updateInstrumento(updateInstrumentoInput) {
        return this.instrumentoService.update(updateInstrumentoInput.id, updateInstrumentoInput);
    }
    removeInstrumento(id) {
        return this.instrumentoService.remove(id);
    }
    softRemoveInstrumento(id) {
        return this.instrumentoService.softRemove(id);
    }
};
exports.InstrumentoResolver = InstrumentoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => instrumento_entity_1.Instrumento),
    __param(0, (0, graphql_1.Args)('createInstrumentoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instrumento_input_1.CreateInstrumentoInput]),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "createInstrumento", null);
__decorate([
    (0, graphql_1.Query)(() => [instrumento_entity_1.Instrumento], { name: 'instrumentos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => instrumento_entity_1.Instrumento, { name: 'instrumento' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => instrumento_entity_1.Instrumento),
    __param(0, (0, graphql_1.Args)('updateInstrumentoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_instrumento_input_1.UpdateInstrumentoInput]),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "updateInstrumento", null);
__decorate([
    (0, graphql_1.Mutation)(() => instrumento_entity_1.Instrumento),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "removeInstrumento", null);
__decorate([
    (0, graphql_1.Mutation)(() => instrumento_entity_1.Instrumento),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstrumentoResolver.prototype, "softRemoveInstrumento", null);
exports.InstrumentoResolver = InstrumentoResolver = __decorate([
    (0, graphql_1.Resolver)(() => instrumento_entity_1.Instrumento),
    __metadata("design:paramtypes", [instrumento_service_1.InstrumentoService])
], InstrumentoResolver);
//# sourceMappingURL=instrumento.resolver.js.map