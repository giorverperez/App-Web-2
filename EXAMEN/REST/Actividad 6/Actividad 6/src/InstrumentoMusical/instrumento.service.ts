import { Injectable } from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-Instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-Instrumento.dto';
import { Repository } from 'typeorm';
import { Instrumento } from './entities/instrumento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstrumentoService {
  constructor(
    @InjectRepository(Instrumento)
    private readonly instrumentoRepository: Repository<Instrumento>
  ) {}

  async create(createComputadoraDto: CreateInstrumentoDto) {
    const computadora = this.instrumentoRepository.create(createComputadoraDto);
    await this.instrumentoRepository.save(computadora);
    return computadora;
  }

  async findAll() {
    return this.instrumentoRepository.find();
  }

  async findOne(id: number) {
    return this.instrumentoRepository.findOneBy({ id });
  }

  async update(id: number, updateComputadoraDto: UpdateInstrumentoDto) {
    const updated = await this.instrumentoRepository.update(id, updateComputadoraDto);
    return updated.affected > 0 ? this.instrumentoRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const computadora = await this.findOne(id);
    if (!computadora) {
      return null;
    }
    await this.instrumentoRepository.remove(computadora);
    return computadora;
  }

  async softRemove(id: number) {
    const computadora = await this.findOne(id);
    if (!computadora) {
      return null;
    }
    computadora.estado = 'Desactivado';
    await this.instrumentoRepository.save(computadora);
    return computadora;
  }
}
