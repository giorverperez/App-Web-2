import { CreateInstrumentoInput } from './dto/create-instrumento.input';
import { UpdateInstrumentoInput } from './dto/update-instrumento.input';
import { Instrumento } from './entities/instrumento.entity';
import { Repository } from 'typeorm';
export declare class InstrumentoService {
    private readonly instrumentoRepository;
    constructor(instrumentoRepository: Repository<Instrumento>);
    create(createInstrumentoInput: CreateInstrumentoInput): Promise<Instrumento>;
    findAll(): Promise<Instrumento[]>;
    findOne(id: number): Promise<Instrumento>;
    update(id: number, updateInstrumentoInput: UpdateInstrumentoInput): Promise<Instrumento>;
    remove(id: number): Promise<Instrumento>;
    softRemove(id: number): Promise<Instrumento>;
}
