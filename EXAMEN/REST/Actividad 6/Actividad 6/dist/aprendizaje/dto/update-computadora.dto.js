"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputadoraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_computadora_dto_1 = require("./create-computadora.dto");
class UpdateComputadoraDto extends (0, mapped_types_1.PartialType)(create_computadora_dto_1.CreateComputadoraDto) {
}
exports.UpdateComputadoraDto = UpdateComputadoraDto;
//# sourceMappingURL=update-computadora.dto.js.map