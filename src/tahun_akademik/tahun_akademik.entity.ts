import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('tahun_akademik')
export class TahunAkademik extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nik: string;

  @Column()
  tahun: number;

  @Column()
  semseter: number;

  @Column()
  status: string;

  @Column()
  tanggal_uts: Date;
  
  @Column()
  tanggal_uas: Date;
}
