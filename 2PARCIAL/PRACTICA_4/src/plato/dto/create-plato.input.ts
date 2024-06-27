import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePlatoInput {
  @Field()
  @IsString()
  nombre: string;
  
  @Field(() => String)
  @IsString()
  estado: string;
}
