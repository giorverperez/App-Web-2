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
exports.ComputadoraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const computadora_entity_1 = require("./entities/computadora.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ComputadoraService = class ComputadoraService {
    constructor(computadoraRepository) {
        this.computadoraRepository = computadoraRepository;
    }
    async create(createComputadoraDto) {
        const computadora = this.computadoraRepository.create(createComputadoraDto);
        await this.computadoraRepository.save(computadora);
        return computadora;
    }
    async findAll() {
        return this.computadoraRepository.find();
    }
    async findOne(id) {
        return this.computadoraRepository.findOneBy({ id });
    }
    async update(id, updateComputadoraDto) {
        const updated = await this.computadoraRepository.update(id, updateComputadoraDto);
        return updated.affected > 0 ? this.computadoraRepository.findOneBy({ id }) : null;
    }
    async remove(id) {
        const computadora = await this.findOne(id);
        await this.computadoraRepository.remove(computadora);
        return computadora;
    }
};
exports.ComputadoraService = ComputadoraService;
exports.ComputadoraService = ComputadoraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(computadora_entity_1.Computadora)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ComputadoraService);
//# sourceMappingURL=computadora.service.js.map