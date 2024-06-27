import { Injectable } from '@nestjs/common';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>
  ) {}

  async create(createPacienteInput: CreatePacienteInput): Promise<Paciente> {
    const created = this.pacienteRepository.create(createPacienteInput);
    return await this.pacienteRepository.save(created);
  }

  async findAll(estado: string): Promise<Paciente[]> {
    if (estado === 'activo' || estado === 'desactivo') {
      return this.pacienteRepository.find({ where: { estado } });
    }
    return await this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    return await this.pacienteRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    const updated = await this.pacienteRepository.preload(updatePacienteInput);
    if (!updated) throw new Error(`Paciente with id: ${id} not found`);
    return await this.pacienteRepository.save(updated);
  }

  async remove(id: number) {
    const paciente = await this.findOne(id);
    paciente.estado = 'desactivo';
    return this.pacienteRepository.save(paciente);
  }
}
