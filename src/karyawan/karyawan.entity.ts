import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('karyawan')
export class Karyawan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nik: string;

  @Column()
  nama: string;

  @Column()
  tanggal_lahir: Date;

  @Column()
  tempat_lahir: string;

  @Column()
  jenis_kelamin: string;

  @Column({
    select: false
  })
  password: string;
}
