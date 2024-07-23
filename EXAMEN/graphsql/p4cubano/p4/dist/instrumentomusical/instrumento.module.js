"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentoModule = void 0;
const common_1 = require("@nestjs/common");
const instrumento_service_1 = require("./instrumento.service");
const instrumento_resolver_1 = require("./instrumento.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const instrumento_entity_1 = require("./entities/instrumento.entity");
let InstrumentoModule = class InstrumentoModule {
};
exports.InstrumentoModule = InstrumentoModule;
exports.InstrumentoModule = InstrumentoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instrumento_entity_1.Instrumento])],
        providers: [instrumento_resolver_1.InstrumentoResolver, instrumento_service_1.InstrumentoService],
        exports: [instrumento_service_1.InstrumentoService]
    })
], InstrumentoModule);
//# sourceMappingURL=instrumento.module.js.map