import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { JadwalPerkuliahan } from 'src/jadwal_perkuliahan/jadwal_perkulihan.entity';

@Entity('perizinan_dosen')
export class PerizinanDosen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(
    type => Karyawan, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_karyawan',
      referencedColumnName: 'id'
  })
  id_karyawan: Karyawan;

  @Column()
  update_status_by: number;

  @Column()
  status: number;

  @Column()
  @ManyToOne(
    type => JadwalPerkuliahan, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_jadwal_perkuliahan',
      referencedColumnName: 'id'
  })
  id_jadwal_perkuliahan: JadwalPerkuliahan;

  @Column()
  keterangan: string;
}
