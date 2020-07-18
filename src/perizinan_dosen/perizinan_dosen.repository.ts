import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PerizinanDosen } from './perizinan_dosen.entity';
import { GetPerizinanDosenFilterDto } from './dto/get-tasks-filter.dto';
import { CreatePerizinanDosenDto } from './dto/create_perizinan_dosen.dto';
import { GetPerizinanDosenByIdDto } from './dto/get_perizinan_by_id.dto';

@EntityRepository(PerizinanDosen)
export class PerizinanDosenRepository extends Repository<PerizinanDosen> {

  async getPerizinanDosenById(
    filterDto: GetPerizinanDosenByIdDto,
  ): Promise<PerizinanDosen> {
    const { id } = filterDto;
    const query = this.createQueryBuilder('perizinan_dosen')
    .where("id = :id", { id: id });

    const perizinanDosen = await query.getOne();

    if (!perizinanDosen) { 
      throw new NotFoundException(`Perizinan dosen with ID "${id}" not found`);
    }

    return perizinanDosen;
  }

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
