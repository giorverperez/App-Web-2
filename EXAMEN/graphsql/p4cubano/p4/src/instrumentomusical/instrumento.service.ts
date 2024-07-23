import { Injectable } from '@nestjs/common';
import { CreateInstrumentoInput } from './dto/create-instrumento.input';
import { UpdateInstrumentoInput } from './dto/update-instrumento.input';
import { Instrumento } from './entities/instrumento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InstrumentoService {
  constructor(
    @InjectRepository(Instrumento)
    private readonly instrumentoRepository: Repository<Instrumento>
  ) {}

  async create(createInstrumentoInput: CreateInstrumentoInput): Promise<Instrumento> {
    const created = this.instrumentoRepository.create(createInstrumentoInput);
    return await this.instrumentoRepository.save(created);
  }

  async findAll(): Promise<Instrumento[]> {
    return await this.instrumentoRepository.find();
  }

  async findOne(id: number): Promise<Instrumento> {
    return await this.instrumentoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateInstrumentoInput: UpdateInstrumentoInput): Promise<Instrumento> {
    const updated = await this.instrumentoRepository.preload({
      id,
      ...updateInstrumentoInput,
    });
    if (!updated) throw new Error(`Instrumento with id: ${id} not found`);
    return await this.instrumentoRepository.save(updated);
  }

  async remove(id: number): Promise<Instrumento> {
    const instrumento = await this.findOne(id);
    if (!instrumento) throw new Error(`Instrumento with id: ${id} not found`);
    return await this.instrumentoRepository.remove(instrumento);
  }

  async softRemove(id: number): Promise<Instrumento> {
    const instrumento = await this.findOne(id);
    if (!instrumento) throw new Error(`Instrumento with id: ${id} not found`);
    instrumento.estado = 'Desactivado';
    return await this.instrumentoRepository.save(instrumento);
  }
}
