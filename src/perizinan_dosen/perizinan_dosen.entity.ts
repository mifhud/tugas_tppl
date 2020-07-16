import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('perizinan_dosen')
export class PerizinanDosen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_karyawan: number;

  @Column()
  disetujui: number;

  @Column()
  status: number;

  @Column()
  id_jadwal_perkuliahan: number;

  @Column()
  keterangan: string;
}
