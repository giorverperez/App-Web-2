import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoController } from './instrumento.controller';
import { Instrumento } from './entities/instrumento.entity';

@Module({
  controllers: [InstrumentoController],
  providers: [InstrumentoService],
  imports: [TypeOrmModule.forFeature([Instrumento])],
  exports: [TypeOrmModule],
})
export class InstrumentoModule {}
