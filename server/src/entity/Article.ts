import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Writer } from './Writer';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column({ type: "longtext" })
  body: string;

  @OneToMany(type => Writer, writer => writer.id)
  writers: Writer[];

}