import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoInput } from './dto/create-instrumento.input';
import { UpdateInstrumentoInput } from './dto/update-instrumento.input';
import { Instrumento } from './entities/instrumento.entity';

@Resolver(() => Instrumento)
export class InstrumentoResolver {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Mutation(() => Instrumento)
  createInstrumento(@Args('createInstrumentoInput') createInstrumentoInput: CreateInstrumentoInput): Promise<Instrumento> {
    return this.instrumentoService.create(createInstrumentoInput);
  }

  @Query(() => [Instrumento], { name: 'instrumentos' })
  findAll(): Promise<Instrumento[]> {
    return this.instrumentoService.findAll();
  }

  @Query(() => Instrumento, { name: 'instrumento' })
  findOne(@Args('id') id: number): Promise<Instrumento> {
    return this.instrumentoService.findOne(id);
  }

  @Mutation(() => Instrumento)
  updateInstrumento(@Args('updateInstrumentoInput') updateInstrumentoInput: UpdateInstrumentoInput): Promise<Instrumento> {
    return this.instrumentoService.update(updateInstrumentoInput.id, updateInstrumentoInput);
  }

  @Mutation(() => Instrumento)
  removeInstrumento(@Args('id') id: number): Promise<Instrumento> {
    return this.instrumentoService.remove(id);
  }

  @Mutation(() => Instrumento)
  softRemoveInstrumento(@Args('id') id: number): Promise<Instrumento> {
    return this.instrumentoService.softRemove(id);
  }
}
