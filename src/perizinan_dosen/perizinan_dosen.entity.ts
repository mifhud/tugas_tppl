import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Karyawan } from 'src/karyawan/karyawan.entity';

@Entity('perizinan_dosen')
export class PerizinanDosen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(
    type => Karyawan, (column) => column.id, {
    nullable: false,
    eager: true,
    primary: false
  })
  @JoinColumn({
      name: 'id_karyawan',
      referencedColumnName: 'id'
  })
  id_karyawan: Karyawan;

  @Column()
  disetujui: number;

  @Column()
  status: number;

  @Column()
  id_jadwal_perkuliahan: number;

  @Column()
  keterangan: string;
}
