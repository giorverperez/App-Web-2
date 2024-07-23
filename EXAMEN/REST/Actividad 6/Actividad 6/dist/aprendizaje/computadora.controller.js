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
exports.ComputadoraController = void 0;
const common_1 = require("@nestjs/common");
const computadora_service_1 = require("./computadora.service");
const create_computadora_dto_1 = require("./dto/create-computadora.dto");
const update_computadora_dto_1 = require("./dto/update-computadora.dto");
let ComputadoraController = class ComputadoraController {
    constructor(computadoraService) {
        this.computadoraService = computadoraService;
    }
    create(createComputadoraDto) {
        return this.computadoraService.create(createComputadoraDto);
    }
    findAll() {
        return this.computadoraService.findAll();
    }
    findOne(id) {
        return this.computadoraService.findOne(id);
    }
    update(id, updateComputadoraDto) {
        return this.computadoraService.update(id, updateComputadoraDto);
    }
    remove(id) {
        return this.computadoraService.remove(id);
    }
};
exports.ComputadoraController = ComputadoraController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_computadora_dto_1.CreateComputadoraDto]),
    __metadata("design:returntype", void 0)
], ComputadoraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComputadoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComputadoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_computadora_dto_1.UpdateComputadoraDto]),
    __metadata("design:returntype", void 0)
], ComputadoraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComputadoraController.prototype, "remove", null);
exports.ComputadoraController = ComputadoraController = __decorate([
    (0, common_1.Controller)('computadora'),
    __metadata("design:paramtypes", [computadora_service_1.ComputadoraService])
], ComputadoraController);
//# sourceMappingURL=computadora.controller.js.map