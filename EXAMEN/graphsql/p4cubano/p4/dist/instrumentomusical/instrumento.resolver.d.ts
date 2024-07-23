import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoInput } from './dto/create-instrumento.input';
import { UpdateInstrumentoInput } from './dto/update-instrumento.input';
import { Instrumento } from './entities/instrumento.entity';
export declare class InstrumentoResolver {
    private readonly instrumentoService;
    constructor(instrumentoService: InstrumentoService);
    createInstrumento(createInstrumentoInput: CreateInstrumentoInput): Promise<Instrumento>;
    findAll(): Promise<Instrumento[]>;
    findOne(id: number): Promise<Instrumento>;
    updateInstrumento(updateInstrumentoInput: UpdateInstrumentoInput): Promise<Instrumento>;
    removeInstrumento(id: number): Promise<Instrumento>;
    softRemoveInstrumento(id: number): Promise<Instrumento>;
}
