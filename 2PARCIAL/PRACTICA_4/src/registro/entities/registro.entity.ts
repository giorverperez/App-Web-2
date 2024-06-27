import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plato } from '../../plato/entities/plato.entity';
import { Paciente } from '../../paciente/entities/paciente.entity';

@ObjectType()
@Entity({ name: 'registros' })
export class Registro {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Plato, (plato) => plato.registros, { eager: true })
  @Field(() => Plato)
  plato: Plato;

  @ManyToOne(() => Paciente, (paciente) => paciente.registros, { eager: true })
  @Field(() => Paciente)
  paciente: Paciente;

  @Column()
  @Field(() => String)
  fecha: string;

  @Column()
  @Field(() => String)
  hora: string;

  @Column()
  @Field(() => Int)
  caloriasConsumidas: number;

  @Column()
  @Field(() => Int)
  numeroPorciones: number;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;
}
