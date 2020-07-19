import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';
import { Karyawan } from 'src/karyawan/karyawan.entity';
import { GetPerizinanDosenFilterDto } from './dto/get_perizinan_dosen_filter.dto';
import { JadwalPerkuliahan } from 'src/jadwal_perkuliahan/jadwal_perkulihan.entity';

@EntityRepository(PerizinanDosen)
export class PerizinanDosenRepository extends Repository<PerizinanDosen> {

  // async getPerizinanDosen(
  //   filterDto: GetPerizinanDosenFilterDto,
  // ): Promise<PerizinanDosen[]> {
  //   const { page, limit } = filterDto;
  //   const query = this.createQueryBuilder('perizinan_dosen');

  //   try {
  //     const perizinanDosen = await query.getMany();
  //     return perizinanDosen;
  //   } catch (error) {
  //     throw new InternalServerErrorException();
  //   }
  // }

  // async getPerizinanDosenById(
  //   id: number,
  // ): Promise<PerizinanDosen> {
  //   const query = this.createQueryBuilder('perizinan_dosen')
  //   .leftJoin("perizinan_dosen.id_karyawan", "id_karyawan")
  //   .where("perizinan_dosen.id = :id", { id: id });

  //   const perizinanDosen = await query.getOne();

  //   if (!perizinanDosen) { 
  //     throw new NotFoundException(`Perizinan dosen with ID "${id}" not found`);
  //   }

  //   return perizinanDosen;
  // }

  async createPerizinanDosen(
    createPerizinanDosenDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    const { id_karyawan, id_jadwal_perkuliahan, keterangan } = createPerizinanDosenDto;

    const perizinanDosen = new PerizinanDosen();
    const karyawan = new Karyawan();
    karyawan.id = id_karyawan;

    const jadwalPerkuliahan = new JadwalPerkuliahan();
    jadwalPerkuliahan.id = id_jadwal_perkuliahan;
    
    perizinanDosen.id_karyawan = karyawan;
    perizinanDosen.id_jadwal_perkuliahan = jadwalPerkuliahan;
    perizinanDosen.keterangan = keterangan;

    try {
      await perizinanDosen.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return perizinanDosen;
  }
}
