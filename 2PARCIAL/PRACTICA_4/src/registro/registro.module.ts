import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroResolver } from './registro.resolver';
import { Registro } from './entities/registro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [RegistroResolver, RegistroService],

  imports: [ TypeOrmModule.forFeature([Registro]) ],
  exports: [ TypeOrmModule ]
})
export class RegistroModule {}
