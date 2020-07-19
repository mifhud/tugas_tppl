import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { Mahasiswa } from 'src/mahasiswa/mahasiswa.entity';

@Entity('perizinan_mahasiswa')
export class PerizinanMahasiswa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(
    type => Mahasiswa, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_mahasiswa',
      referencedColumnName: 'id'
  })
  id_mahasiswa: Mahasiswa;

  @Column()
  update_status_by: number;

  @Column()
  status: number;

  @Column()
  id_jadwal_perkuliahan: number;

  @Column()
  keterangan: string;
}
