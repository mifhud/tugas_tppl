import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('tahun_akademik')
export class TahunAkademik extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tahun: number;

  @Column()
  semester: number;

  @Column()
  status: string;

  @Column()
  tanggal_uts: Date;
  
  @Column()
  tanggal_uas: Date;
}
