import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('ruang')
export class Ruang extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kode_ruang: string;

  @Column()
  nama_ruang: string;

  @Column()
  lantai_ruang: string;

  @Column()
  keterangan: string;
}
