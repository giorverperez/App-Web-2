import { ComputadoraService } from './computadora.service';
import { CreateComputadoraDto } from './dto/create-computadora.dto';
import { UpdateComputadoraDto } from './dto/update-computadora.dto';
export declare class ComputadoraController {
    private readonly computadoraService;
    constructor(computadoraService: ComputadoraService);
    create(createComputadoraDto: CreateComputadoraDto): Promise<import("./entities/computadora.entity").Computadora>;
    findAll(): Promise<import("./entities/computadora.entity").Computadora[]>;
    findOne(id: number): Promise<import("./entities/computadora.entity").Computadora>;
    update(id: number, updateComputadoraDto: UpdateComputadoraDto): Promise<import("./entities/computadora.entity").Computadora>;
    remove(id: number): Promise<import("./entities/computadora.entity").Computadora>;
}
