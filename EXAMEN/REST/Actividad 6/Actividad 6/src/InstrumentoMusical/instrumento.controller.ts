import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-Instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-Instrumento.dto';

@Controller('instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Post()
  create(@Body() createComputadoraDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createComputadoraDto);
  }

  @Get()
  findAll() {
    return this.instrumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instrumentoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateComputadoraDto: UpdateInstrumentoDto) {
    return this.instrumentoService.update(id, updateComputadoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instrumentoService.remove(id);
  }

  @Patch('soft-remove/:id')
  softRemove(@Param('id') id: number) {
    return this.instrumentoService.softRemove(id);
  }
}

