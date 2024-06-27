import { InputType, Field, ID, PartialType, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { CreateRegistroInput } from './create-registro.input';

@InputType()
export class UpdateRegistroInput extends PartialType(CreateRegistroInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
