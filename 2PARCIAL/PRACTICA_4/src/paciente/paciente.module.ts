import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

@Module({
  providers: [PacienteResolver, PacienteService],

  imports: [ TypeOrmModule.forFeature([Paciente]) ],
  exports: [ TypeOrmModule ]
})
export class PacienteModule {}
