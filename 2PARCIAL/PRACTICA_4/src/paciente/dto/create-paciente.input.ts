import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePacienteInput {
  @Field()
  @IsString()
  nombre: string;

  @Field()
  @IsString()
  identificacion: string;

  @Field(() => String)
  @IsString()
  estado: string;
}
