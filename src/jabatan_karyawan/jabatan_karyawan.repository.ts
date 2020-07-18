import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JabatanKaryawan } from './jabatan_karyawan.entity';

@EntityRepository(JabatanKaryawan)
export class JabatanKaryawanRepository extends Repository<JabatanKaryawan> {

    // async getPerizinanDosenById(
    //     id: number,
    //   ): Promise<JabatanKaryawan> {
    //     const query = this.createQueryBuilder('perizinan_dosen')
    //     .leftJoin("perizinan_dosen.id_karyawan", "id_karyawan")
    //     .where("perizinan_dosen.id = :id", { id: id });
    
    //     const perizinanDosen = await query.getOne();
    
    //     if (!perizinanDosen) { 
    //       throw new NotFoundException(`Perizinan dosen with ID "${id}" not found`);
    //     }
    
    //     return perizinanDosen;
    // }
}
