import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Karyawan } from 'src/karyawan/karyawan.entity';

@Entity('perizinan_dosen')
export class PerizinanDosen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(
    type => Karyawan, (column) => column.id, {
    eager: false,
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
  id_jadwal_perkuliahan: number;

  @Column()
  keterangan: string;
}
