import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegistroService } from './registro.service';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { Registro } from './entities/registro.entity';

@Resolver(() => Registro)
export class RegistroResolver {
  constructor(private readonly registroService: RegistroService) {}

  @Mutation(() => Registro)
  createRegistro(@Args('createRegistroInput') createRegistroInput: CreateRegistroInput): Promise<Registro> {
    return this.registroService.create(createRegistroInput);
  }

  @Query(() => [Registro], { name: 'registros' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.registroService.findAll(estado);
  }

  @Query(() => Registro, { name: 'registro' })
  findOne(@Args('id') id: number): Promise<Registro> {
    return this.registroService.findOne(id);
  }

  @Mutation(() => Registro)
  updateRegistro(@Args('updateRegistroInput') updateRegistroInput: UpdateRegistroInput): Promise<Registro> {
    return this.registroService.update(updateRegistroInput.id, updateRegistroInput);
  }

  @Mutation(() => Registro)
  removeRegistro(@Args('id') id: number): Promise<Registro> {
    return this.registroService.remove(id);
  }
}
