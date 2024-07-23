import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrumentoInput } from './create-instrumento.input';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateInstrumentoInput extends PartialType(CreateInstrumentoInput) {

  @Field(() => ID)
  @IsInt()
  id: number;
}
