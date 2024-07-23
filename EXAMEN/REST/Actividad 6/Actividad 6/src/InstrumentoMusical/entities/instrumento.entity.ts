import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Instrumento' })
export class Instrumento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    codigo: string;

    @Column('text')
    conocido: string;

    @Column('text', { nullable: true })
    clasedeInstrumento: string;

    @Column('text', { nullable: true })
    material: string;

    @Column('decimal', { precision: 10, scale: 2 })
    costo_aproximado: number;

    @Column('bigint')
    fechadecreacion: number;

    @Column('text', { nullable: true })
    empresa: string;

    // Puedes agregar campos adicionales aquí si es necesario
    // Por ejemplo, para el estado
    @Column('text', { default: 'Activo' })
    estado: string;
}
