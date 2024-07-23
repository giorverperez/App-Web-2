import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'instrumentos' })
export class Instrumento {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  codigo?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  conocido?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  clasedeInstrumento?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  material?: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  costo_aproximado?: number;

  @Column('bigint', { nullable: true })
  @Field(() => Int, { nullable: true })
  fechadecreacion?: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  empresa?: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
