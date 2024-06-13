import { CreatePacienteDto, CreateRegistroDto as CreateRegistroDto, UpdatePacienteDto as UpdatePacienteDto } from '../dtos';
import { PacienteEntity } from '../entities/Paciente.entity';



export abstract class PacienteDatasource {

  abstract create( createTodoDto: CreatePacienteDto ): Promise<PacienteEntity>;
  abstract getAll(): Promise<PacienteEntity[]>;
  abstract findById( id: number ): Promise<PacienteEntity>;
  abstract updateById( updateTodoDto: UpdatePacienteDto ): Promise<PacienteEntity>;
  abstract deleteById( id: number ): Promise<PacienteEntity>;

}