import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Registro } from '../../registro/entities/registro.entity';

@ObjectType()
@Entity({ name: 'platos' })
export class Plato {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => Registro, (registro) => registro.plato)
  @Field(() => [Registro], { nullable: true })
  registros?: Registro[];
}
