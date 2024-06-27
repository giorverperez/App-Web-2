import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlatoService } from './plato.service';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';
import { Plato } from './entities/plato.entity';

@Resolver(() => Plato)
export class PlatoResolver {
  constructor(private readonly platoService: PlatoService) {}

  @Mutation(() => Plato)
  createPlato(@Args('createPlatoInput') createPlatoInput: CreatePlatoInput): Promise<Plato> {
    return this.platoService.create(createPlatoInput);
  }

  @Query(() => [Plato], { name: 'platos' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.platoService.findAll(estado);
  }

  @Query(() => Plato, { name: 'plato' })
  findOne(@Args('id', { type: () => Number }) id: number): Promise<Plato> {
    return this.platoService.findOne(id);
  }

  @Mutation(() => Plato)
  updatePlato(@Args('updatePlatoInput') updatePlatoInput: UpdatePlatoInput): Promise<Plato> {
    return this.platoService.update(updatePlatoInput.id, updatePlatoInput);
  }

  @Mutation(() => Plato)
  removePlato(@Args('id', { type: () => Number }) id: number): Promise<Plato> {
    return this.platoService.remove(id);
  }
}
