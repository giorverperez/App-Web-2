import { Module } from '@nestjs/common';
import { RegistroModule } from './Registro/Registro.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [RegistroModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}