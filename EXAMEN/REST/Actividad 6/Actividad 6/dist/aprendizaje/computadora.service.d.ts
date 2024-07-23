import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';
import { Repository } from 'typeorm';
import { Computadora } from './entities/computadora.entity';
export declare class ComputadoraService {
    private readonly computadoraRepository;
    constructor(computadoraRepository: Repository<Computadora>);
    create(createComputadoraDto: CreateComputadoraDto): Promise<Computadora>;
    findAll(): Promise<Computadora[]>;
    findOne(id: number): Promise<Computadora>;
    update(id: number, updateComputadoraDto: UpdateComputadoraDto): Promise<Computadora>;
    remove(id: number): Promise<Computadora>;
}
