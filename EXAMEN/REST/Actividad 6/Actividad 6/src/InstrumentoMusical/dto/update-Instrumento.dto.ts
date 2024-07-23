import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrumentoDto } from './create-Instrumento.dto';

export class UpdateInstrumentoDto extends PartialType(CreateInstrumentoDto) {
    
}
