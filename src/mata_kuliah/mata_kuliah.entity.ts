import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('mata_kuliah')
export class MataKuliah extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kode: string;

  @Column()
  nama: string;

  @Column()
  bobot: number;

  @Column()
  t: number;

  @Column()
  p: number;
  
  @Column()
  k: number;
}
