import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateInstrumentoInput {

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  id?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  codigo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  conocido?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  clasedeInstrumento?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  material?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  costo_aproximado?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  fechadecreacion?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  empresa?: string;
}
