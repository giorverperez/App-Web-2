import { Injectable } from '@nestjs/common';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { Registro } from './entities/registro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly registroRepository: Repository<Registro>
  ) {}

  async create(createRegistroInput: CreateRegistroInput): Promise<Registro> {
    const registro = this.registroRepository.create({
      ...createRegistroInput,
      plato: { id: createRegistroInput.platoId },
      paciente: { id: createRegistroInput.pacienteId }
    });
    const { id } = await this.registroRepository.save(registro);
    return await this.findOne(+id);
  }

  async findAll(estado: string): Promise<Registro[]> {
    if (estado === 'activo' || estado === 'desactivo') {
      return this.registroRepository.find({ where: { estado } });
    }
    return await this.registroRepository.find();
  }

  async findOne(id: number): Promise<Registro> {
    return await this.registroRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRegistroInput: UpdateRegistroInput): Promise<Registro> {
    const updated = await this.registroRepository.preload(updateRegistroInput);
    if (!updated) throw new Error(`Registro with id: ${id} not found`);
    return await this.registroRepository.save(updated);
  }

  async remove(id: number) {
    const registro = await this.findOne(id);
    registro.estado = 'desactivo';
    return this.registroRepository.save(registro);
  }
}
