import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateRegistroInput {
  @Field(() => Int)
  @IsInt()
  platoId: number;

  @Field(() => Int)
  @IsInt()
  pacienteId: number;

  @Field()
  @IsString()
  fecha: string;

  @Field()
  @IsString()
  hora: string;

  @Field(() => Int)
  @IsInt()
  caloriasConsumidas: number;

  @Field(() => Int)
  @IsInt()
  numeroPorciones: number;
  
  @Field(() => String)
@IsString()
estado: string;
}

