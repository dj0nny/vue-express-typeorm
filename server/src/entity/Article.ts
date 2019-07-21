import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

  @ManyToOne(type => Writer, writer => writer.id)
  writer: Writer;
  
}