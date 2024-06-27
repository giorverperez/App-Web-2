import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatoInput } from './dto/create-plato.input';
import { UpdatePlatoInput } from './dto/update-plato.input';
import { Plato } from './entities/plato.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) {}

  async create(createPlatoInput: CreatePlatoInput): Promise<Plato> {
    const created = this.platoRepository.create(createPlatoInput);
    return await this.platoRepository.save(created);
  }

  async findAll(estado: string): Promise<Plato[]> {
    if (estado === 'activo' || estado === 'desactivo') {
      return this.platoRepository.find({ where: { estado } });
    }
    return await this.platoRepository.find();
  }

  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOne({ where: { id } });
    if (!plato) {
      throw new NotFoundException(`Plato with id ${id} not found`);
    }
    return plato;
  }

  async update(id: number, updatePlatoInput: UpdatePlatoInput): Promise<Plato> {
    const plato = await this.platoRepository.preload({
      id,
      ...updatePlatoInput,
    });
    if (!plato) {
      throw new NotFoundException(`Plato with id ${id} not found`);
    }
    return this.platoRepository.save(plato);
  }

  async remove(id: number): Promise<Plato> {
    const plato = await this.findOne(id);
    if (!plato) {
      throw new NotFoundException(`Plato with id ${id} not found`);
    }
    plato.estado = 'desactivo';
    return this.platoRepository.save(plato);
  }
}
