import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';

@Resolver(() => Paciente)
export class PacienteResolver {
  constructor(private readonly pacienteService: PacienteService) {}

  @Mutation(() => Paciente)
  createPaciente(@Args('createPacienteInput') createPacienteInput: CreatePacienteInput): Promise<Paciente> {
    return this.pacienteService.create(createPacienteInput);
  }

  @Query(() => [Paciente], { name: 'pacientes' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.pacienteService.findAll(estado);
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('id') id: number): Promise<Paciente> {
    return this.pacienteService.findOne(id);
  }

  @Mutation(() => Paciente)
  updatePaciente(@Args('updatePacienteInput') updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    return this.pacienteService.update(updatePacienteInput.id, updatePacienteInput);
  }

  @Mutation(() => Paciente)
  removePaciente(@Args('id') id: number): Promise<Paciente> {
    return this.pacienteService.remove(id);
  }
}
