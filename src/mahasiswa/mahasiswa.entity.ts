import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('mahasiswa')
export class Mahasiswa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nim: string;

  @Column()
  nama: string;

  @Column()
  tanggal_lahir: Date;

  @Column()
  tempat_lahir: string;

  @Column()
  jenis_kelamin: string;

  @Column()
  status: string;

  @Column({
    select: false
  })
  password: string;
}
