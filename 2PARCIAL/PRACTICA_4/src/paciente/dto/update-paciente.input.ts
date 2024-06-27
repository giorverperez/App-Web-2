import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { CreatePacienteInput } from './create-paciente.input';

@InputType()
export class UpdatePacienteInput extends PartialType(CreatePacienteInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
