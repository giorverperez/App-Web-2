import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { CreatePlatoInput } from './create-plato.input';

@InputType()
export class UpdatePlatoInput extends PartialType(CreatePlatoInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
