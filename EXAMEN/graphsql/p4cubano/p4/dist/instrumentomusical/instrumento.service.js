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
exports.InstrumentoService = void 0;
const common_1 = require("@nestjs/common");
const instrumento_entity_1 = require("./entities/instrumento.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let InstrumentoService = class InstrumentoService {
    constructor(instrumentoRepository) {
        this.instrumentoRepository = instrumentoRepository;
    }
    async create(createInstrumentoInput) {
        const created = this.instrumentoRepository.create(createInstrumentoInput);
        return await this.instrumentoRepository.save(created);
    }
    async findAll() {
        return await this.instrumentoRepository.find();
    }
    async findOne(id) {
        return await this.instrumentoRepository.findOne({ where: { id } });
    }
    async update(id, updateInstrumentoInput) {
        const updated = await this.instrumentoRepository.preload({
            id,
            ...updateInstrumentoInput,
        });
        if (!updated)
            throw new Error(`Instrumento with id: ${id} not found`);
        return await this.instrumentoRepository.save(updated);
    }
    async remove(id) {
        const instrumento = await this.findOne(id);
        if (!instrumento)
            throw new Error(`Instrumento with id: ${id} not found`);
        return await this.instrumentoRepository.remove(instrumento);
    }
    async softRemove(id) {
        const instrumento = await this.findOne(id);
        if (!instrumento)
            throw new Error(`Instrumento with id: ${id} not found`);
        instrumento.estado = 'Desactivado';
        return await this.instrumentoRepository.save(instrumento);
    }
};
exports.InstrumentoService = InstrumentoService;
exports.InstrumentoService = InstrumentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(instrumento_entity_1.Instrumento)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], InstrumentoService);
//# sourceMappingURL=instrumento.service.js.map