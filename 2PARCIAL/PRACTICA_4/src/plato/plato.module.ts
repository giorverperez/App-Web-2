import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoResolver } from './plato.resolver';
import { Plato } from './entities/plato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PlatoResolver, PlatoService],

  imports: [ TypeOrmModule.forFeature([Plato]) ],
  exports: [ TypeOrmModule ]
})
export class PlatoModule {}
