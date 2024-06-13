import { CreateRegistroDto as CreateRegistroDto, UpdateRegistroDto as UpdateRegistroDto } from '../dtos';
import { RegistroEntity as RegistroEntity } from '../entities/Registro.entity';



export abstract class RegistroDatasource {

  abstract create( createTodoDto: CreateRegistroDto ): Promise<RegistroEntity>;
  abstract getAll(): Promise<RegistroEntity[]>;
  abstract findById( id: number ): Promise<RegistroEntity>;
  abstract updateById( updateTodoDto: UpdateRegistroDto ): Promise<RegistroEntity>;
  abstract deleteById( id: number ): Promise<RegistroEntity>;

}