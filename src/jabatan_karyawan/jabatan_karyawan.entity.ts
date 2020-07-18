import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Jabatan } from 'src/jabatan/jabatan.entity';
import { Karyawan } from 'src/karyawan/karyawan.entity';

@Entity('jabatan_karyawan')
export class JabatanKaryawan extends BaseEntity {
    @PrimaryColumn()
    @ManyToOne(
      type => Karyawan, (column) => column.id, {
      eager: true,
    })
    @JoinColumn({
        name: 'id_karyawan',
        referencedColumnName: 'id'
    })    
    id_karyawan: Karyawan;

    @PrimaryColumn()
    @ManyToOne(
        type => Jabatan, (column) => column.id, {
        eager: true,
    })
    @JoinColumn({
        name: 'id_jabatan',
        referencedColumnName: 'id'
    })
    id_jabatan: Jabatan;
}
