import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PerizinanMahasiswa } from './perizinan_mahasiswa.entity';
import { GetPerizinanMahasiswaFilterDto } from './dto/get_perizinan_mahasiswa_filter.dto';
import { CreatePerizinanMahasiswaDto } from './dto/create_perizinan_mahasiswa.dto';
import { Mahasiswa } from 'src/mahasiswa/mahasiswa.entity';
import { JadwalPerkuliahan } from 'src/jadwal_perkuliahan/jadwal_perkulihan.entity';

@EntityRepository(PerizinanMahasiswa)
export class PerizinanMahasiswaRepository extends Repository<PerizinanMahasiswa> {

  //   async getPerizinanMahasiswa(
  //       filterDto: GetPerizinanMahasiswaFilterDto,
  //   ): Promise<PerizinanMahasiswa[]> {
  //       const { page, limit } = filterDto;
  //       const query = this.createQueryBuilder('perizinan_mahasiswa');
    
  //       try {
  //           const perizinanMahasiswa = await query.getMany();
  //           return perizinanMahasiswa;
  //       } catch (error) {
  //           console.error(error);
  //           throw new InternalServerErrorException();
  //       }
  //   }

  // async getPerizinanMahasiswaById(
  //   id: number,
  // ): Promise<PerizinanMahasiswa> {
  //   const query = this.createQueryBuilder('perizinan_mahasiswa')
  //   .leftJoin("perizinan_mahasiswa.id_mahasiswa", "id_mahasiswa")
  //   .where("perizinan_mahasiswa.id = :id", { id: id });

  //   const perizinanMahasiswa = await query.getOne();

  //   if (!perizinanMahasiswa) { 
  //     throw new NotFoundException(`Perizinan mahasiswa with ID "${id}" not found`);
  //   }

  //   return perizinanMahasiswa;
  // }

  async createPerizinanMahasiswa(
    createPerizinanMahasiswaDto: CreatePerizinanMahasiswaDto,
  ): Promise<PerizinanMahasiswa> {
    const { id_mahasiswa, id_jadwal_perkuliahan, keterangan } = createPerizinanMahasiswaDto;

    const perizinanMahasiswa = new PerizinanMahasiswa();
    const mahasiswa = new Mahasiswa();
    mahasiswa.id = id_mahasiswa;

    const jadwalPerkuliahan = new JadwalPerkuliahan();
    jadwalPerkuliahan.id = id_jadwal_perkuliahan;
    
    perizinanMahasiswa.id_mahasiswa = mahasiswa;
    perizinanMahasiswa.id_jadwal_perkuliahan = jadwalPerkuliahan;
    perizinanMahasiswa.keterangan = keterangan;

    try {
        await perizinanMahasiswa.save();
    } catch (error) {
        throw new InternalServerErrorException();
    }

    return perizinanMahasiswa;
  }

  async getPerizinanMahasiswaByIdAndIdTahunAkademik(
      id_mahasiswa: number,
      id_tahun_akademik: number,
  ): Promise<PerizinanMahasiswa[]> {
      const query = this.createQueryBuilder('perizinan_mahasiswa')
      .leftJoinAndSelect('perizinan_mahasiswa.id_jadwal_perkuliahan', 'id_jadwal_perkuliahan')
      .where("perizinan_mahasiswa.id_mahasiswa = :id_mahasiswa", { id_mahasiswa: id_mahasiswa })
      .andWhere("id_jadwal_perkuliahan.id_tahun_akademik = :id_tahun_akademik", { id_tahun_akademik: id_tahun_akademik });
  
      try {
          const perizinanMahasiswa = await query.getMany();
          return perizinanMahasiswa;
      } catch (error) {
          console.error(error);
          throw new InternalServerErrorException();
      }
  }
}
