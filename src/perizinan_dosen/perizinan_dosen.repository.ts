import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { GetPerizinanDosenFilterDto } from './dto/get-tasks-filter.dto';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';

@EntityRepository(PerizinanDosen)
export class PerizinanDosenRepository extends Repository<PerizinanDosen> {

  async getPerizinanDosen(
    filterDto: GetPerizinanDosenFilterDto,
  ): Promise<PerizinanDosen[]> {
    const { page, limit } = filterDto;
    const query = this.createQueryBuilder('perizinan_dosen');

    try {
      const perizinanDosen = await query.getMany();
      return perizinanDosen;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createPerizinanDosen(
    createPerizinanDosenDto: CreatePerizinanDosenDto,
  ): Promise<PerizinanDosen> {
    const { id_karyawan, disetujui, status, id_jadwal_perkuliahan, keterangan } = createPerizinanDosenDto;

    const perizinanDosen = new PerizinanDosen();
    perizinanDosen.id_karyawan = id_karyawan;
    perizinanDosen.disetujui = disetujui;
    perizinanDosen.status = status;
    perizinanDosen.id_jadwal_perkuliahan = id_jadwal_perkuliahan;
    perizinanDosen.keterangan = keterangan;

    try {
      await perizinanDosen.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return perizinanDosen;
  }
}
