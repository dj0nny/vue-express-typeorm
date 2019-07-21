import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Article } from './Article';

@Entity()
export class Writer {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @OneToMany(type => Article, article => article.id)
  articles: Article[];
}

