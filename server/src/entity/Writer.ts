import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Writer {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string;

  @Column()
  secondName: string;

}

