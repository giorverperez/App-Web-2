import { IsOptional, IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateInstrumentoDto {

    @IsOptional()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    conocido: string;

    @IsOptional()
    @IsString()
    clasedeInstrumento: string;

    @IsOptional()
    @IsString()
    material: string;

    @IsOptional()
    @IsNumber()
    costo_aproximado: number;

    @IsOptional()
    @IsNumber()
    fechadecreacion: number;

    @IsOptional()
    @IsString()
    empresa: string;
}
