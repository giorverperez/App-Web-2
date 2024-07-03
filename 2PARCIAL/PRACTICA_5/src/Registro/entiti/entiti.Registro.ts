import { Column, Entity, PrimaryColumn, } from 'typeorm';

@Entity({ name: 'Registro' })
export class RegistroEntiti {




      @PrimaryColumn()
      id: number

      @Column()
      platoId: number;


      @Column()
      pacienteId: number;


      @Column()
      fecha: string;

      @Column()
      hora: string;

      @Column()
      caloriasConsumidas: number;

      @Column()
      numeroPorciones: number;




}