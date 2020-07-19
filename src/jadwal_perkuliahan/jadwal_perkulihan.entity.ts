import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Ruang } from 'src/ruang/ruang.entity';
import { MataKuliah } from 'src/mata_kuliah/mata_kuliah.entity';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { TahunAkademik} from 'src/tahun_akademik/tahun_akademik.entity';

@Entity('jadwal_perkuliahan')
export class JadwalPerkuliahan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(
    type => Ruang, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_ruang',
      referencedColumnName: 'id'
  })
  id_ruang: Ruang;

  @Column()
  @ManyToOne(
    type => MataKuliah, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_mata_kuliah',
      referencedColumnName: 'id'
  })
  id_mata_kuliah: MataKuliah;

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
  @ManyToOne(
    type => TahunAkademik, (column) => column.id, {
    eager: true,
  })
  @JoinColumn({
      name: 'id_tahun_akademik',
      referencedColumnName: 'id'
  })
  id_tahun_akademik: TahunAkademik;
}
