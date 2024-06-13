import { CreatePlatoDto as CreatePlatoDto, UpdatePlatoDto as UpdatePletoDto } from '../dtos';
import { PlatoEntity as PlatoEntity } from '../entities/Plato.entity';



export abstract class PlatoRepository {

  abstract create( createTodoDto: CreatePlatoDto ): Promise<PlatoEntity>;
  abstract getAll(): Promise<PlatoEntity[]>;
  abstract findById( id: number ): Promise<PlatoEntity>;
  abstract updateById( updateTodoDto: UpdatePletoDto ): Promise<PlatoEntity>;
  abstract deleteById( id: number ): Promise<PlatoEntity>;

}