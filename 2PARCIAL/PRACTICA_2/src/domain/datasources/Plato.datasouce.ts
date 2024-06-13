import { CreatePlatoDto as CreatePlatoDto, UpdatePlatoDto as UpdatePlatoDto } from '../dtos';
import {PlatoEntity as PlatoEntity } from '../entities/Plato.entity';



export abstract class PlatoDatasource {

  abstract create( createTodoDto: CreatePlatoDto ): Promise<PlatoEntity>;
  abstract getAll(): Promise<PlatoEntity[]>;
  abstract findById( id: number ): Promise<PlatoEntity>;
  abstract updateById( updateTodoDto: UpdatePlatoDto ): Promise<PlatoEntity>;
  abstract deleteById( id: number ): Promise<PlatoEntity>;

}