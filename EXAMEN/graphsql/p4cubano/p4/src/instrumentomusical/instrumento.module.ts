import { Module } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoResolver } from './instrumento.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrumento } from './entities/instrumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumento])],
  providers: [InstrumentoResolver, InstrumentoService],
  exports: [InstrumentoService]  // Export the service if it needs to be used in other modules
})
export class InstrumentoModule {}
