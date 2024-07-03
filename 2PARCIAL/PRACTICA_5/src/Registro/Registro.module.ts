import { Module } from '@nestjs/common';
import { RegistroService } from './Registro.service';
import { RegistroGateway } from './Registro.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroEntiti } from './entiti/entiti.Registro';

@Module({
  providers: [RegistroGateway, RegistroService],
  imports: [TypeOrmModule.forFeature([RegistroEntiti])],
  exports: [TypeOrmModule]
})
export class RegistroModule {}
